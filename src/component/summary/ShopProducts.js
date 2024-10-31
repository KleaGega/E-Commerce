import React, { useContext } from 'react';
import { CartContext } from '../../features/CartContext';
import './shopProducts.css';

const ShopProducts = ({ data }) => {
    const { increase, decrease, handleRemove } = useContext(CartContext);
  
    return (
      <div className="product-card">
        <img src={data.image} className="product-image" alt={data.title} />
        <div className="product-details">
          <h4 className="product-title">{data.title}</h4>
          <h5 className="product-price">${data.price}</h5>
          <div className="buttons">
            <button className="quantity-button" onClick={() => decrease(data.id)}><b>-</b></button>
            <span className="quantity-display">{data.quantity}</span>
            <button className="quantity-button" onClick={() => increase(data.id)}><b>+</b></button>
          </div>
          <button className="remove-button" onClick={() => handleRemove(data.id)}>Remove</button>
        </div>
      </div>
    );
};

export default ShopProducts;