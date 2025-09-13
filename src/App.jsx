import React, { useState } from "react";
import { getInitialVariant } from "./variant";

function App() {
  const [variant, setVariant] = useState(getInitialVariant());

  const renderContent = () => {
    switch (variant) {
      case "dfy":
        return <h1>Done For You Page</h1>;
      case "dwy":
        return <h1>Done With You Page</h1>;
      case "diy":
        return <h1>Do It Yourself Page</h1>;
      case "book":
        return <h1>Book a Call Page</h1>;
      default:
        return <h1>Hello, AI BotBuilders OS is live!</h1>;
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      {renderContent()}
    </div>
  );
}

export default App;
