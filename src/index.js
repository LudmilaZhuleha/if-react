import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./components/App/App";
import Home from "./components/Home/Home";
import LayoutHomes from "./components/LayoutHomes/LayoutHomes";
import Signin from "./components/Signin/Signin";
import { persistor, store } from "./store";
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Signin />} />
            <Route path="/" element={<App />}></Route>
            <Route path="/" element={<LayoutHomes />}>
                <Route path="/:id" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
