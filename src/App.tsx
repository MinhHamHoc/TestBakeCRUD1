import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import ProductPage from './Pages/Products';
import UserPage from './Pages/user';
import Cart from './Pages/order/cart'
import { Link, Routes, Route } from 'react-router-dom'
import OrderPage from './Pages/order';
import { FaShoppingCart } from 'react-icons/fa'
import { CartProvider } from 'react-use-cart'
import OrderPages from './Components/OrderPages';

function App() {

  return (
    <>
      <nav className='text-center mb-3' >
        <Link className='text-decoration-none fs-3 text-info ' to="/"> Home </Link>
        <Link className='text-decoration-none fs-3 text-info' to="product"> Products </Link>
        <Link className='text-decoration-none fs-3 text-info' to="cart">{<FaShoppingCart />}</Link>
      </nav>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="product" element={<ProductPage />} />
          <Route path="cart" element={<OrderPages />} />
      </Routes>
    </>
  );
}

export default App;
