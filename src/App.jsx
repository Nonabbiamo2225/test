import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { AnimatePresence } from 'framer-motion';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import VideoBackground from './components/VideoBackground';

// Pages
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import AreaRivenditori from './pages/AreaRivenditori';
import BlogTecnico from './pages/BlogTecnico';

const App = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <VideoBackground />
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/prodotto/:id" element={<ProductDetails />} />
            <Route path="/carrello" element={<Cart />} />
            <Route path="/contatti" element={<Contact />} />
            <Route path="/area-rivenditori" element={<AreaRivenditori />} />
            <Route path="/blog-tecnico" element={<BlogTecnico />} />
          </Routes>
        </AnimatePresence>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;