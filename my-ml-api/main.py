from typing import List

from fastapi import Depends, FastAPI, HTTPException, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from api import crud, models, schemas
from api.database import SessionLocal, engine
from api import upload_service
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:3000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    return crud.create_user(db=db, user=user)


@app.get("/users/", response_model=List[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users


@app.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@app.post("/upload")
async def create_upload_file(file: UploadFile = File(...), db: Session = Depends(get_db)):
    upload = schemas.UploadCreate(file_name=file.filename, user_id=1)

    return {"upload_id": upload_service.upload_file(db, upload, file)}


@app.get("/uploads/", response_model=List[schemas.Upload])
def read_uploads(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    uploads = crud.get_uploads(db, skip=skip, limit=limit)
    return uploads