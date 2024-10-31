import React, { useContext } from 'react';
import CartContext from '../../features/CartContext';
import ShopProducts from './ShopProducts';
import './cartSummary.css';
import { ThemeContext } from '../../features/ThemeProvider';

const CartSummary = () => {
   const { cart, totalItem, totalPrice, handleCheckOut } = useContext(CartContext);
   const { theme } = useContext(ThemeContext); 

   return (
     <div className={`cart-summary-container ${theme}`}>
       <div className="products-container">
         {cart.length > 0 ? (
           cart.map((product) => (
             <div key={product.id} className="product-item">
               <ShopProducts data={product} />
            </div>
           ))
         ) : (
           <h5>Your cart is empty.</h5>
         )}
       </div>
       <div className="summary-container">
         <div className="summary-content">
           <h5>Total Items: {totalItem(cart)}</h5>
           <h5>Total Price: ${totalPrice(cart).toFixed(2)}</h5>
           <button className="btn" onClick={handleCheckOut}>Checkout</button>
         </div>
       </div>
     </div>
   );
};
 
export default CartSummary;
