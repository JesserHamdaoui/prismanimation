import { Route, Routes } from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Merch from "./pages/Merch";
import Portfolio from "./pages/Portfolio";
import Recruitment from "./pages/Recruitment";
import Footer from "./layout/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="min-h-screen pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/recruitment" element={<Recruitment />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
