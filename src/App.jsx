import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notifications from "./components/Notifications";
import NotificationDetails from "./components/NotificationDetails";
import Home from "./components/Home";
import Faq from "./components/Faq";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/notification/:id" element={<NotificationDetails />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
