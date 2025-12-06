import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
