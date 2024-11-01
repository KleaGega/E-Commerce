import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import CartReducer from "./CartReducer";
import useShopping from "./useShopping";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const initialCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cart, dispatch] = useReducer(CartReducer, initialCart);
  const { data,setData } = useShopping();


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/product/${id}`);
    console.log(`choose element me id: ${id}`);
  }; 
  const addToCart = (item) => {
    dispatch({ type: "Add", data: item });
  };
  
  const increase = (id) => {
    dispatch({ type: "Increase", payload: {id}});
    console.log(`Increase product with id: ${id}`);
  };
  
  const decrease = (id) => {
    dispatch({ type: "Decrease", payload:{id} });
    console.log(`Decrease product with id: ${id}`);
  };
  

  const handleRemove = (id) => {
    console.log(`Removing product with id: ${id}`);
    dispatch({ type: "Remove", payload: { id } });
  };
 

  const goHome = () => {
    navigate('./home')
  }

  const totalItem = (cart) => {
    return cart.reduce((sum, data) => sum + (data.quantity || 0), 0);
  };
  
  const totalPrice = (cart) => {
    return cart.reduce((total, data) => total + (data.quantity || 0) * (data.price || 0), 0);
  };
  const handleCheckOut = () => {
    dispatch({ type: "Clear"  });
    navigate('./checkout ');
  };
 

  return (
    <CartContext.Provider value={
        {data,
         cart, 
         handleDetails, 
         dispatch ,
         increase,
         decrease,
         handleRemove,
         addToCart,
         goHome,
         totalItem,
         totalPrice,
         handleCheckOut}
        }>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
