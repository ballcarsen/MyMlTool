from typing import List, Optional

from pydantic import BaseModel


class UploadBase(BaseModel):
    file_location: str


class UploadCreate(UploadBase):
    pass


class Upload(UploadBase):
    upload_id: int
    user_id: int

    class Config:
        orm_mode = True


class UserBase(BaseModel):
    first_name: str
    last_name: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    user_id: int
    uploads: List[Upload] = []

    class Config:
        orm_mode = True