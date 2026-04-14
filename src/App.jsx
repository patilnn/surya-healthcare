import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-[calc(100vh-5rem)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div className="p-10 text-center text-xl font-semibold text-slate-700">
                Page not found.
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;