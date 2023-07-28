import sys
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float, DateTime
from setting import Base
from setting import engine

class User(Base):

    __tablename__ = 'hantei'
    id = Column('id', Integer, primary_key = True)
    A = Column('magari', String(50))
    B = Column('sakibutori', String(50))
    C = Column('seijyo', String(50))

def main(args):


    Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    main(sys.argv)
