import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { colorReducer } from '../../features/CartReducer';
import './Filters.css';

const Filters = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState({ red: false, blue: false, green: false });
  // similarly other three

  return (
    <div>
      <div className='Filters'>
        <h2 style={{ textAlign: 'center' }}>Filters</h2>
        {/* Color below */}
        <div className='ColorFilter'>
          <div>Color</div>
          <div>
            <input
              type='checkbox'
              defaultChecked={color.red}
              onClick={() => {
                // setColor((prevState) => {
                //   return { ...prevState, red: !color.red };
                // });
                setColor({ ...color, red: !color.red });
                dispatch(colorReducer(color));
              }}
            />
            <label>Red</label>
          </div>
          <div>
            <input
              type='checkbox'
              defaultChecked={color.blue}
              onClick={() => {
                setColor({ ...color, blue: !color.blue });
                dispatch(colorReducer(color));
              }}
            />
            <label>Blue</label>
          </div>
          <div>
            <input type='checkbox' />
            <label>Green</label>
          </div>
        </div>
        {/* Gender below */}
        <div className='GenderFilter'>
          <div>Gender</div>
          <div>
            <input type='checkbox' />
            <label>Men</label>
          </div>
          <div>
            <input type='checkbox' />
            <label>Women</label>
          </div>
        </div>
        {/* Price below */}
        <div className='PriceFilter'>
          <div>Price</div>
          <div>
            <input type='checkbox' />
            <label>0-Rs250</label>
          </div>
          <div>
            <input type='checkbox' />
            <label>Rs251-450</label>
          </div>
          <div>
            <input type='checkbox' />
            <label>Rs450 or more</label>
          </div>
        </div>
        {/* Type below */}
        <div className='TypeFilter'>
          <div>Type</div>
          <div>
            <input type='checkbox' />
            <label>Polo</label>
          </div>
          <div>
            <input type='checkbox' />
            <label>Hoodie</label>
          </div>
          <div>
            <input type='checkbox' />
            <label>Basic</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
