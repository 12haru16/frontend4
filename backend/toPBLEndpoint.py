# import random

# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware

# app = FastAPI()

# origins = ["http://localhost:3000"]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @app.get("/api/data")
# async def get_data():
#     return {
#         "anum": 
#              {f"{day}": random.randint(20, 50) for day in range(1, 31)}
#         ,
#         "bnum": 
#             {f"{day}": random.randint(50, 100) for day in range(1, 31)}
#         ,
#         "cnum": 
#             {f"{day}": random.randint(50, 80) for day in range(1, 31)}
#     }

import random

from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

import mysql.connector
from mysql.connector import cursor
from user import *
from setting import session

cnx=mysql.connector.connect(host='127.0.0.1',user='root',password="Choco12.16haru")

app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

##########SQLconnet#################
def get_db_connection():
    connection = mysql.connector.connect(
        host='127.0.0.1',
        user="root",
        password="Choco12.16haru",
        database="kyuri"
    )
    return connection

def get_db():
    connection = get_db_connection()
    db = connection.cursor()
    try:
        yield db
    finally:
        db.close()
        connection.close()

def get_sql_db(db: cursor.MySQLCursor = Depends(get_db)):
    return db
##########SQLconnet#################

@app.get("/api/data")
async def get_data_from_sql(db: cursor.MySQLCursor = Depends(get_sql_db)):
    query = "SELECT * FROM hantei"
    db.execute(query)
    result = db.fetchall()


    # cursor = cnx.cursor(buffered=True)
    # sql = 'SELECT count(id) FROM '+'hantei'
    # cursor.execute(sql)
    # result = cursor.fetchall()
    # record_max = result[0][0]

    

    # for i in range(1,record_max+1):
    #     users = session.query(User).\
    #     filter(User.id==i).\
    #     all()


    print("result",type(result[0][3]))
    aNum = 0
    bNum = 0
    cNum = 0
    # for i in range(len(result)):
    #     aNum += int(result[i][3])
    #     bNum += int(result[i][2])
    #     cNum += int(result[i][1])
    print("aNum",aNum)
    # a=[]
    # a=[1,2,3,4,5]

    if result:
        return {
            "anum":
            {f"{i}":result[i][1] for i in range(len(result))},
            #{"1":10,"2":10,"3":10,"4":10,"5":10,"6":10,"7":10,"8":10,"9":10,"10":aNum},
            "bnum":{f"{i}":result[i][2] for i in range(len(result))},
            #{"1":10,"2":10,"3":10,"4":10,"5":10,"6":10,"7":10,"8":10,"9":10,"10":bNum},
            "cnum":{f"{i}":result[i][3] for i in range(len(result))}
            #{"1":10,"2":10,"3":10,"4":10,"5":10,"6":10,"7":10,"8":10,"9":10,"10":cNum}
        }
    else:
        return {"error": "User not found"}
    
get_data_from_sql()