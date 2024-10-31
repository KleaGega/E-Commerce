const CartReducer = (state, action) => {
    switch (action.type) {
      case "Increase":
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
  
      case "Decrease":
        return state.map((item) =>
          item.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
  
      case "Add":
        const existingItem = state.find((item) => item.id === action.data.id);
        if (existingItem) {
          return state.map((item) =>
            item.id === action.data.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...state, { ...action.data, quantity: 1 }];
        }
  
      case "Remove":
        return state.filter((item) => item.id !== action.payload.id);
  
      default:
        return state;
    }
  };
  

export default CartReducer;
