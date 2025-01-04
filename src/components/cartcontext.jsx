import React, { createContext, useState, useContext } from 'react';

// Create the CartContext
const CartContext = createContext();

// CartProvider to manage cart state and provide methods to manipulate the cart
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to update cart (add or update product quantity)
  const updateCart = (product, quantity) => {
    setCart((prevCart) => {
      const productExists = prevCart.some(item => item.name === product.name);
      if (productExists) {
        return prevCart.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + quantity } // Update quantity if the product already exists
            : item
        );
      }
      return [...prevCart, { ...product, quantity }]; // Add the new product with the specified quantity
    });
  };

  // Function to remove product from the cart by name
  const removeFromCart = (productName) => {
    setCart((prevCart) => prevCart.filter(item => item.name !== productName));
  };

  // Function to clear the entire cart
  const clearCart = () => setCart([]);

  // Calculate the total number of items and the total price of the cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, updateCart, removeFromCart, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use CartContext in components
export const useCart = () => useContext(CartContext);
