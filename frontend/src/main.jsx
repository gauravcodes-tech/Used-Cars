import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";
import { CarProvider } from "./context/CarContext";

import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(

<BrowserRouter>

<AuthProvider>

<CarProvider>

<App/>

</CarProvider>

</AuthProvider>

</BrowserRouter>

);