import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Read variant flag from the HTML page (set in dfy.html, dwy.html, diy.html, book.html)
const variant = window.__VARIANT__ || "dfy";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App variant={variant} />
  </React.StrictMode>
);
