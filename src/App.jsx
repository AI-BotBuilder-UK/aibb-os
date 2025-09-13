import React from "react";

import Dfy from "./pages/Dfy.jsx";
import Dwy from "./pages/Dwy.jsx";
import Diy from "./pages/Diy.jsx";
import Book from "./pages/Book.jsx";

function App({ variant }) {
  switch (variant) {
    case "dwy":
      return <Dwy />;
    case "diy":
      return <Diy />;
    case "book":
      return <Book />;
    case "dfy":
    default:
      return <Dfy />;
  }
}

export default App;
