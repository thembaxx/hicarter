import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";

function App() {
  const containerRef = useRef(null);

  const toggleScroll = (showScroll) => {
    if (containerRef.current) {
      containerRef.current.style.overflowY = showScroll ? "auto" : "hidden";
    }
  };

  return (
    <div ref={containerRef} className="app">
      <Header toggleScroll={toggleScroll} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
