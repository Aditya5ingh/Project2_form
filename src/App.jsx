import { useState } from "react";
import Landing from "./pages/Landing/landing";

import "./App.css";
import Navbar from "./pages/navbar/navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
