from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from db import SessionLocal, engine
import models

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/skins")
def get_skins(db: Session = Depends(get_db)):
    return db.query(models.Skin).all()

@app.post("/deposit")
def deposit(user_id: int, amount: float, db: Session = Depends(get_db)):
    user = db.query(models.User).get(user_id)
    user.balance += amount
    db.commit()
    return {"balance": user.balance}

@app.post("/buy")
def buy(user_id: int, skin_id: int, db: Session = Depends(get_db)):
    user = db.query(models.User).get(user_id)
    skin = db.query(models.Skin).get(skin_id)

    if user.balance < skin.price:
        return {"error": "not enough money"}

    user.balance -= skin.price

    inv = models.Inventory(user_id=user.id, skin_id=skin.id)
    db.add(inv)
    db.commit()

    # отправка на сервер
    from rcon import give_skin
    give_skin(user.steam_id, skin.name)

    return {"status": "ok"}
