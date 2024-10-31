import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../../features/CartContext';
import './productDetails.css'; 
import { ThemeContext } from '../../features/ThemeProvider';

function ProductDetails() {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const { increase, decrease, data, cart, goHome, addToCart } = useContext(CartContext);
  
  const product = data?.find((item) => item.id === parseInt(id));
  if (!product) {
    return <div className='not-found'>Product not found</div>;
  }
  
  const cartItem = cart.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleQuantityChange = (action) => {
    if (action === "increase") {
      if (quantity === 0) {
        addToCart(product); 
      } else {
        increase(product.id); 
      }
    } else if (action === "decrease") {
      if (quantity > 0) {
        decrease(product.id); 
      }
    }
  };
  
  return (
    <div className={`container_item ${theme}`}>
      <div className={`container_details ${theme}`}>
        <h1 className={`product-title ${theme}`}>{product.title}</h1>
        <img className='product-image' src={product.image} alt={product.title} />
        <p className={`product-description ${theme}`}>{product.description}</p>
        <p className={`product-category ${theme}`}>Category: {product.category}</p>
        <p className={`product-price ${theme}`}>Price: ${product.price}</p>
        <button className='back-button' onClick={goHome}>Go Back</button>
        <div className="buttons">
          <button className="quantity-button" onClick={() => handleQuantityChange("decrease")}>
            <b>-</b>
          </button>
          <span className="quantity-display">{quantity}</span>
          <button className="quantity-button" onClick={() => handleQuantityChange("increase")}>
            <b>+</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
