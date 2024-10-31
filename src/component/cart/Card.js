import React, { useContext } from 'react';
import PropTypes from 'prop-types'; 
import './cart.css';
import CartContext from '../../features/CartContext';
import { ThemeContext } from '../../features/ThemeProvider';

function Card({ data }) {
  const { theme } = useContext(ThemeContext); 
  const { handleDetails, addToCart } = useContext(CartContext);
  
  return ( 
    <div className={`container ${theme}`}>
      <div className='card_action'>
        <div className={`product-card ${theme}`}> 
          <div className='detail_data' onClick={() => handleDetails(data.id)} >
            <p className={`product-title ${theme}`}>{data.title}</p> 
            <img className='product-image' src={data.image} alt={data.title} />
          </div>
          <p className='product-price'>${data.price}</p>
          <div className='btn-container'> 
            <button onClick={() => addToCart(data)} className='add'>Add to Cart</button>
          </div>
        </div> 
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
