import React from "react";

export default function SkinList({ skins, onBuy }) {
  return (
    <div>
      {skins.map((skin) => (
        <div key={skin.id} style={{ margin: "10px", border: "1px solid #ccc", padding: "10px" }}>
          <h3>{skin.name}</h3>
          <p>Цена: {skin.price}</p>
          <button onClick={() => onBuy(skin.id)}>Купить</button>
        </div>
      ))}
    </div>
  );
}
