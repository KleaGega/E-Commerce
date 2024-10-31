import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../../features/CartContext';
import './productDetails.css'; 

function ProductDetails() {
  const { id } = useParams();
  const {  increase, decrease, data, cart, goHome } = useContext(CartContext);
  
  const product = data?.find((item) => item.id === parseInt(id));
  if (!product) {
    return <div className='not-found'>Product not found</div>;
  }
  const cartItem = cart.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className='container_details'>
      <h1 className='product-title'>{product.title}</h1>
      <img className='product-image' src={product.image} alt={product.title} />
      <p className='product-description'>{product.description}</p>
      <p className='product-category'>Category: {product.category}</p>
      <p className='product-price'>Price: ${product.price}</p>
      <button className='back-button' onClick={goHome}>Go Back</button>

      <div className="buttons">
        <button className="quantity-button" onClick={() => decrease(product.id)}>
          <b>-</b>
        </button>
        <span className="quantity-display">{quantity}</span>
        <button className="quantity-button" onClick={() => increase(product.id)}>
          <b>+</b>
        </button>
      </div>
    </div>
  );
}


export default ProductDetails;
