import React from 'react';
import MainLayout from './layout/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import New from './pages/shop/New';
import Chappell from './pages/shop/Chappell';
import BestSellers from './pages/shop/BestSellers';
import Lips from './pages/shop/Lips';
import Face from './pages/shop/Face';
import Eyes from './pages/shop/Eyes';
import Home from './pages/Home';
import Cart from './pages/Cart';

export default function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/chappell" element={<Chappell />} />
            <Route path="/bestSellers" element={<BestSellers />} />
            <Route path="/lips" element={<Lips />} />
            <Route path="/face" element={<Face />} />
            <Route path="/eyes" element={<Eyes />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
