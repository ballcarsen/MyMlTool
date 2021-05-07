import os
from fastapi import File
import pickle
from . import crud, models, schemas
from sqlalchemy.orm import Session
from .database import SessionLocal, engine
from api import upload_service

def create_user_upload(
    user_id: int, upload: schemas.UploadCreate, db: Session
):
    return crud.create_user_upload(db=db, upload=upload, user_id=user_id)

def upload_file(upload_id: int, file: File):
    with(open('D:\\carse\\Documents\\dev\\MyMlTool\\my-ml-api\\api\\uploads\\' + str (upload_id) + file.filename, 'wb+') as new_file ):
        new_file.write(file.file.read())
    return file.filename