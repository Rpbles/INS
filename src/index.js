import React from "react";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <HashRouter>
  <App />
</HashRouter>
);