import { AnimatePresence } from "framer-motion";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Header from "./components/Header";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <AnimatePresence>
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </AnimatePresence>
  );
}

export default App;
