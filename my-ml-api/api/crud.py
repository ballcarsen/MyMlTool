from sqlalchemy.orm import Session

from . import models, schemas


def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.user_id == user_id).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = models.User(first_name=user.first_name, last_name=user.last_name, hashed_password=fake_hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_uploads(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Upload).offset(skip).limit(limit).all()


def create_user_upload(db: Session, upload: schemas.UploadCreate):
    db_item = models.Upload(**upload.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item.upload_id