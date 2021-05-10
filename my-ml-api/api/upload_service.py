import os
from fastapi import File
import pickle
from . import crud, models, schemas
from sqlalchemy.orm import Session
from .database import SessionLocal, engine

def upload_file(db, upload: schemas.UploadCreate, file: File):
    upload_id = crud.create_user_upload(db=db, upload=upload)
    with(open('D:\\carse\\Documents\\dev\\MyMlTool\\my-ml-api\\api\\uploads\\' + str (upload_id) + upload.file_name, 'wb+') as new_file ):
        new_file.write(file.file.read())
        
    return upload_id