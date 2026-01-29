import React from "react";

export default function Home({ navigate }) {
  return (
    <div className="home">
      <div className="home-overlay">
        <h1 className="home-title">SmogBusters</h1>
        <p className="home-subtitle">
          Clean the city. One action at a time.
        </p>

        <div className="home-buttons">
          <button className="home-btn" onClick={() => navigate("Tasks")}>
             Tasks
		 <img
   		src={require("./assets/tasks.jpg")}
    		alt="Tasks"
   		 className="btn-icon"
  		/>
          </button>

          <button className="home-btn">
            📘 Tutorial
          </button>

          <button className="home-btn" onClick={() => navigate("Shop")}>
            🛒 Shop
          </button>

          <button className="home-btn">
            📊 Record AQI
          </button>

          <button className="home-btn" onClick={() => navigate("Compete")}>
            🏆 Compete
          </button>

          <button className="home-btn" onClick={() => navigate("Settings")}>
            ⚙️ Settings
          </button>
        </div>
      </div>
    </div>
  );
}