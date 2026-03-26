function App() {

  async function buySkin(id) {
    await fetch("http://localhost:8000/buy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: 1,
        skin_id: id
      })
    });
  }

  return (
    <div>
      <h1>CS2 Shop</h1>
      <button onClick={() => buySkin(1)}>Купить AK-47</button>
    </div>
  );
}

export default App;
