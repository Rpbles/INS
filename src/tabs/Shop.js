import React, { useState } from "react";

export default function Shop() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  return (
    <div>
      <h2>Shop Notes</h2>

      <input
        type="text"
        placeholder="Add shop idea..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <button onClick={() => {
        setItems([...items, item]);
        setItem("");
      }}>
        Add
      </button>

      <ul>
        {items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
