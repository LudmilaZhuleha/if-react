import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./index.css";
import App from "./components/App/App";
import Home from "./components/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/:id" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
