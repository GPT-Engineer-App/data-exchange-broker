import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Search from "./pages/Search.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;