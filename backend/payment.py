@app.post("/stripe/webhook")
async def stripe_webhook(data: dict, db: Session = Depends(get_db)):
    user_id = data["metadata"]["user_id"]
    amount = float(data["amount"]) / 100

    user = db.query(models.User).get(user_id)
    user.balance += amount
    db.commit()

    return {"ok": True}
