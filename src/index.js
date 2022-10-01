import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./components/App/App";
import Home from "./components/Home/Home";
import LayoutHomes from "./components/LayoutHomes/LayoutHomes";
import Signin from "./components/Signin/Signin";
import {store} from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="main" element={<App />} />
        <Route index element={<Signin />} />
        <Route path="/" element={<LayoutHomes />}>
          <Route path="/:id" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
