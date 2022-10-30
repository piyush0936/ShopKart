import React from 'react';
import './Products.css';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/CartReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DisplayProducts = ({ filteredList }) => {
  const dispatch = useDispatch();

  const handleProductAdd = () => {
    toast.success('Item Added from Cart !', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <div className='ProductsList'>
        <ToastContainer
          autoClose={1000}
          style={{ top: '4.4rem', right: '0rem' }}
        />
        {filteredList.length ? (
          filteredList.map((item) => {
            return (
              <div key={item.id}>
                <div className='CardItem'>
                  <img
                    src={item.imageURL}
                    alt={item.name}
                    className='CardItemImage'
                  />
                  <div className='TextOnImage'>
                    <div> {item.name} </div>
                  </div>
                  <div className='CardItemBottom'>
                    <p className='ItemPrice'>₹{item.price}</p>
                    <Button
                      variant='contained'
                      className='AddToCartButton'
                      onClick={() => {
                        handleProductAdd();
                        dispatch(addToCart(item));
                      }}
                      disabled={item.orderQnty > item.quantity}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h2>No Results Found</h2>
        )}
      </div>
    </>
  );
};

export default DisplayProducts;
