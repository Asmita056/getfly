import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "../src/main";
import Notifications from "./components/Notifications";
import Home from "./components/Home";
import Faq from "./components/Faq";
// import Contact from "./components/Contact";

function App() {
  return (
    <Switch>
      <div>
        {/* <Home /> */}
        <Route path="/" component={Home} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/faq" component={Faq} />
        {/* <Route path="/contact" component={Contact} /> */}
      </div>
    </Switch>
  );
}

export default App;

// import Navbar from "./components/Navbar";
// import Faq from "./components/Faq";
// import Notifications from "./components/Notifications";
// import Footer from "./components/Footer";
// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       {/* <Faq /> */}
//       {/* <Notifications /> */}
//       <Footer />
//     </div>
//   );
// }

// export default App;
