import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from '../CartPage/CartPage';
import Products from '../Products/Products';

const RouterFile = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Products />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterFile;
