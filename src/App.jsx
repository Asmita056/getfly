// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Switch } from "react-router-dom";
// import Notifications from "./components/Notifications";
// import Home from "./components/Home";
// import Faq from "./components/Faq";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/notifications" component={Notifications} />
//           <Route path="/faq" component={Faq} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Notifications from "./components/Notifications";
// import Home from "./components/Home";
// import Faq from "./components/Faq";

// function App() {
//   return (
//     <Switch>
//       <div>
//         <Home />
//         <Route path="/" component={Home} />
//         <Route path="/notifications" component={Notifications} />
//         <Route path="/faq" component={Faq} />
//       </div>
//     </Switch>
//   );
// }

// export default App;

import Navbar from "./components/Navbar";
import Faq from "./components/Faq";
import Notifications from "./components/Notifications";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Faq /> */}
      <Notifications />
      <Footer />
    </div>
  );
}

export default App;
