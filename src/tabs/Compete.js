import React, { useState } from "react";

export default function Compete() {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);

  return (
    <div>
      <h2>Compete Messages</h2>

      <input
        type="text"
        placeholder="Write a message..."
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />

      <button onClick={() => {
        setMessages([...messages, msg]);
        setMsg("");
      }}>
        Post
      </button>

      <ul>
        {messages.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </div>
  );
}
