import React, { useState } from "react";
import Home from "./tabs/Home";
import Tasks from "./tabs/Tasks";
import Shop from "./tabs/Shop";
import Compete from "./tabs/Compete";
import Settings from "./tabs/Settings";

export default function App() {
  const [page, setPage] = useState("Home");

  const renderPage = () => {
    switch (page) {
      case "Tasks": return <Tasks />;
      case "Shop": return <Shop />;
      case "Compete": return <Compete />;
      case "Settings": return <Settings />;
      default: return <Home navigate={setPage} />;
    }
  };

  return (
    <div className="app">
      <main className="content">
        {renderPage()}
      </main>
    </div>
  );
}