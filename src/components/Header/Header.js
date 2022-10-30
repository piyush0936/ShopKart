import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const count = useSelector((state) => state.cartItems.cart) || 0;

  return (
    <div className='Header'>
      <div className='HeaderLeft' onClick={() => navigate('/')}>
        ShopKart
      </div>
      <div className='HeaderRight'>
        <div onClick={() => navigate('/')}>Products</div>
        <div onClick={() => navigate('/cart')}>
          <Badge badgeContent={count.length} color='secondary'>
            <ShoppingCartIcon color='action' />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Header;
