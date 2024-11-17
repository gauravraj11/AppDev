import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {Dishes} from '../shared/dishes'


// Create the StoreContext
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const url = "http://localhost:9000";

  // State variables
  const [food_list, setFoodList] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const currency = "₹";

  // Add item to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  // Get total amount
  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
      const item = food_list.find((dish) => dish.id === parseInt(itemId));
      return item ? total + item.price * cartItems[itemId] : total;
    }, 0);
  };

  // Load dishes 
  useEffect(() => {
    setFoodList(Dishes)
    // Mock API call for food_list
  }, []);

  // Context value
  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    currency,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
