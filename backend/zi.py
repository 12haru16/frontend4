# �Z�b�V�����ϐ��̎擾
from setting import session
# User���f���̎擾
from user import *
cnx = None
import mysql.connector
conn=mysql.connector.connect(host='127.0.0.1',user='root',password="Choco12.16haru")

# DB�Ƀ��R�[�h�̒ǉ�
user = User()

# User�e�[�u����name�J���������ׂĎ擾
# users = session.query(User).all()
# for user in users:
#     print(user.id)

#retu()

try:
    cnx = mysql.connector.connect(
        user='root',  # ���[�U�[��
        password='Choco12.16haru',  # �p�X���[�h
        host='127.0.0.1',  # �z�X�g��(IP�A�h���X�j
        database='kyuri'  # �f�[�^�x�[�X��
    )

    if cnx.is_connected:
        print("Connected!")

    cursor = cnx.cursor(buffered=True)

    # cursor.execute("DROP TABLE IF EXISTS hantei")#�f�[�^�x�[�X���������

    sql = 'SELECT count(id) FROM '+'hantei'
    cursor.execute(sql)
    result = cursor.fetchall()
    print (result)

    record_max = result[0][0]
    print ('�o�^����Ă��鑍���R�[�h�� ==> ', record_max)
        

    cursor.close()

except Exception as e:
    print(f"Error Occurred: {e}")


finally:
    if cnx is not None and cnx.is_connected():
        conn.close()

# for i in range(1,record_max+1):
#     users = session.query(User).\
#     filter(User.id==i).\
#     all()

for i in range(1,record_max+1):
    users = session.query(User).\
    filter(User.id==i).\
    all()
    a=[]
    #a[i]=user.A
    #print(a[i])
    #print(user.A)
    {f"{i}":print(user.C) for user in users}
    

    # for user in users:
    #     print(user.id,user.A,user.B,user.C)