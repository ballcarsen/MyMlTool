from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base

class User(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    hashed_password = Column(String)

    uploads = relationship("Upload", back_populates="user")


class Upload(Base):
    __tablename__ = "uploads"

    upload_id = Column(Integer, primary_key=True, index=True)
    file_name = Column(String)
    user_id = Column(Integer, ForeignKey("users.user_id"))

    user = relationship("User", back_populates="uploads")