import React, { useEffect, useState } from "react";
import { getSkins, buySkin } from "./api";
import SkinList from "./components/SkinList";

function App() {
  const [skins, setSkins] = useState([]);

  useEffect(() => {
    async function fetchSkins() {
      const data = await getSkins();
      setSkins(data);
    }
    fetchSkins();
  }, []);

  const handleBuy = async (skin_id) => {
    const res = await buySkin(1, skin_id); // 1 — тестовый user_id
    if (res.status === "ok") alert("Куплено!");
    else alert(res.error);
  };

  return (
    <div>
      <h1>CS2 Shop</h1>
      <SkinList skins={skins} onBuy={handleBuy} />
    </div>
  );
}

export default App;
