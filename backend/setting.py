from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.engine.url import URL

DB = {
    'drivername': 'mysql',
    'host': '127.0.0.1',
    'port': '3306',
    'username': 'root',
    'password': 'Choco12.16haru',
    'database': 'kyuri',
    'query': {'charset': 'utf8'}  # クエリパラメータを追加
}

# エンジンの作成
engine = create_engine(URL(**DB))

# sessionmakerの作成
Session = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

# scoped_sessionの作成
session = scoped_session(Session)

Base = declarative_base()
Base.query = session.query_property()

