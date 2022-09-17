import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./index.css";
import App from "./components/App/App";
import Home from "./components/Home/Home";
import LayoutHomes from "./components/LayoutHomes/LayoutHomes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index  element={<App />}/>
        <Route path="/" element={<LayoutHomes />}>
          <Route path="/:id" element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
