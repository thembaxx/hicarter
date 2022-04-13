import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";

function App() {
  const [hideScrollbar, setHideScrollbar] = useState(false);

  const toggleScroll = (showScroll) => {
    setHideScrollbar(!showScroll);
  };

  return (
    <div className={`app ${hideScrollbar ? "hidescrollbar" : ""}`}>
      <Header toggleScroll={toggleScroll} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
