import React from 'react';
import './checkout.css'; 

const Checkout = () => {
  return (
    <div className="checkout-confirmation-container">
      <h2 className="thank-you-title">Thank You for Your Purchase!</h2>
      <p className="confirmation-message">
        Your order is being processed, and you will receive an email confirmation shortly.
      </p>
    </div>
  );
};

export default Checkout;
