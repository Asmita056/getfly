import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notifications from "./components/Notifications";
import Home from "./components/Home";
import Faq from "./components/Faq";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
