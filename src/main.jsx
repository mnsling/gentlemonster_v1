import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import { CartProvider } from './components/cartcontext';
import './index.css';
import Home from './pages/home';
import Products from './pages/products';
import Collab from './pages/collaborations';
import Events from './pages/events';
import Stores from './pages/stores';
import Navbar from './components/navbar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider> {/* Wrapping components with CartProvider */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/events" element={<Events />} />
          <Route path="/collaborations" element={<Collab />} />
          <Route path="/stores" element={<Stores />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
