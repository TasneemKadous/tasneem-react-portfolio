import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "react-quill/dist/quill.snow.css";
import "./i18n"; // Import i18n configuration

const myApp = (
      <BrowserRouter>
        <App />
      </BrowserRouter>


);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myApp);
