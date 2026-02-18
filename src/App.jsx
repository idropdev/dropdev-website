import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToAnchor from './components/ScrollToAnchor';
import Home from './pages/Home';
import Business from './pages/Business';
import FocusAreas from './pages/FocusAreas';
import Portfolio from './pages/Portfolio';
import Calculator from './pages/Calculator';
import Team from './pages/Team';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <ScrollToAnchor />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/business" element={<Business />} />
            <Route path="/focus-areas" element={<FocusAreas />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
