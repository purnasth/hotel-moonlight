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
import Gallery from './components/ui/Gallery';
import PackageComponent from './pages/PackageComponent';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <RouterToTop />
        <WhatsApp />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<PackageComponent />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
