import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/global.css";
import "./styles/dashboard.css";
import "./styles/course.css";
import "./styles/quiz.css";
import "./styles/progress.css";
import "./styles/auth.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);