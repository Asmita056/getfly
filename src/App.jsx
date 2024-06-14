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
