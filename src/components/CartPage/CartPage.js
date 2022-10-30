import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/Header';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './CartPage.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  addToCartOneItem,
  deleteOneItem,
  deleteProducts,
} from '../../features/CartReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cartItems.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function totalAmount() {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.orderQnty;
    });
    return total;
  }

  const handleProductDelete = () => {
    toast.error('Item Removed from Cart !', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <Header />
      <div className='CartHeading'>Shopping Cart</div>
      <ToastContainer autoClose={2000} />
      <div className='CartDetails'>
        {cartItems.length ? (
          <table cellSpacing='38px'>
            <tbody>
              {cartItems.map((item) => {
                return (
                  <>
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.imageURL}
                          alt={item.name}
                          width='100px'
                          height='100px'
                        />
                      </td>
                      <td>
                        <div>{item.name}</div>
                        <div>₹ {item.price}</div>
                      </td>
                      <td>
                        <div className='IncDecBtn'>
                          <div
                            className='IncDecSymbol'
                            onClick={() => dispatch(deleteOneItem(item.id))}
                          >
                            <RemoveIcon
                              sx={{ border: '1px solid black', margin: '10px' }}
                            />
                          </div>
                          <div className='IncDecSymbol'>{item.orderQnty}</div>
                          <div
                            className='IncDecSymbol'
                            onClick={() => dispatch(addToCartOneItem(item.id))}
                          >
                            <AddIcon
                              sx={{ border: '1px solid black', margin: '10px' }}
                            />
                          </div>
                        </div>
                      </td>
                      <td
                        onClick={() => dispatch(deleteProducts(item.id))}
                        variant='text'
                      >
                        <DeleteIcon
                          onClick={handleProductDelete}
                          className='IncDecSymbol'
                          sx={{ color: 'red' }}
                        />
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td>Total: ₹ {totalAmount()}</td>
              </tr>
            </tfoot>
          </table>
        ) : (
          <>
            <h1>Your Cart is Empty</h1>
            <br />
            <Button variant='contained' onClick={() => navigate('/')}>
              Continue Shopping
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
