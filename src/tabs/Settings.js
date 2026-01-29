import React, { useState } from "react";

export default function Settings() {
  const [setting, setSetting] = useState("");
  const [settings, setSettings] = useState([]);

  return (
    <div>
      <h2>Settings Notes</h2>

      <input
        type="text"
        placeholder="Add preference..."
        value={setting}
        onChange={(e) => setSetting(e.target.value)}
      />

      <button onClick={() => {
        setSettings([...settings, setting]);
        setSetting("");
      }}>
        Save
      </button>

      <ul>
        {settings.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
