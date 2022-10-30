import React, { useState } from 'react';
import './Products.css';
import Header from '../Header/Header';
import Filters from '../Filters/Filters';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { filterBySearchText } from '../../features/CartReducer';
import DisplayProducts from './DisplayProducts';

const Products = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const productsList =
    useSelector((state) => state.cartItems.allProducts) || [];
  const filteredProductsList =
    useSelector((state) => state.cartItems.filteredProducts) || [];

  return (
    <div>
      <Header />
      <Filters />
      <div className='ProductsPage'>
        <div>
          <div className='Search'>
            <input
              className='Searchbar'
              type='text'
              placeholder='Search for products...'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button
              variant='text'
              onClick={() => dispatch(filterBySearchText(searchText))}
            >
              <SearchIcon />
            </Button>
          </div>

          {filteredProductsList.length > 0 && (
            <DisplayProducts filteredList={filteredProductsList} />
          )}

          {filteredProductsList.length < 1 && (
            <DisplayProducts filteredList={productsList} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
