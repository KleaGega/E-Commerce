import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Homepage from '../component/homepage/Homepage';
import CartSummary from '../component/summary/CartSummary';
import ProductDetails from '../component/details/ProductDetails';
import Checkout from '../component/checkout/Checkout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Homepage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartSummary />} />
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
  );
};

export default AppRoutes;
