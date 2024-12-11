import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import RouterToTop from './utils/RouterToTop';
import Navbar from './layouts/Navbar';
import WhatsApp from './components/ui/WhatsApp';
import Footer from './layouts/Footer';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <RouterToTop />
        <WhatsApp />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
