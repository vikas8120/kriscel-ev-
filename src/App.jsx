import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import FloatingCTA from './components/FloatingCTA';
import Home from './pages/Home';
import Scooters from './pages/Scooters';
import Bikes from './pages/Bikes';
import ComparePage from './pages/ComparePage';
import Technology from './pages/Technology';
import Charging from './pages/Charging';
import TestRide from './pages/TestRide';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgressBar />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/scooters" element={<Scooters />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/charging" element={<Charging />} />
          <Route path="/test-ride" element={<TestRide />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
