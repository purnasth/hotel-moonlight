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
import ArticlePage from './pages/ArticlePage';
import PackageComponent from './pages/PackageComponent';
import PromotionsPage from './pages/PromotionsPage';
import ContactPage from './pages/ContactPage';
import TawkToChat from './components/TawkToChat';
import GalleryPage from './pages/GalleryPage';
import Facilities from './pages/Facilities';
import useLenisScroll from './utils/useLenisScroll';

const App: React.FC = () => {
  useLenisScroll();
  return (
    <>
      <Router>
        <RouterToTop />
        <WhatsApp />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<PackageComponent />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/offers" element={<PromotionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
        </Routes>
        <Footer />
        <TawkToChat />
      </Router>
    </>
  );
};

export default App;
