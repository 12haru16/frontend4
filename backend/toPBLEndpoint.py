import random

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/data")
async def get_data():
    return {
        "anum": 
             {f"{day}": random.randint(20, 50) for day in range(1, 31)}
        ,
        "bnum": 
            {f"{day}": random.randint(50, 100) for day in range(1, 31)}
        ,
        "cnum": 
            {f"{day}": random.randint(50, 80) for day in range(1, 31)}
    }