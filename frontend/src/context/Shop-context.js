import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);



const getDefaultCart = (products) => {
  let cart = {};

  products.forEach((product) => {
    cart[product.id] = 0;
  });

  return cart;
};

export default function ShopcontextProvider(props) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const fetchAllProducts = async () => {
      let allProducts = [];
      let currentPage = 1;
      let totalPages = 1;
  
      while (currentPage <= totalPages) {
        const response = await fetch(`https://jacobgervin.dk/wp-json/wp/v2/product?per_page=100&page=${currentPage}`);
        const data = await response.json();
        allProducts = [...allProducts, ...data];
        currentPage++;
        totalPages = response.headers.get('x-wp-totalpages');
      }
  
      setProducts(allProducts);
    };
  
    fetchAllProducts();
  }, [setProducts]);
  
  useEffect(() => {
    setCartItems(getDefaultCart(products));
  }, [products]);

  const addToCart = (itemId) => {
    
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find(
          (product) => product.id === Number(item)
        );

        totalAmount += cartItems[item] * itemInfo.acf.price;
      }
    }
    return totalAmount;
  };

  let totalPopulation = 0;
  let keys = Object.values(cartItems);

  keys.forEach((number) => {
    totalPopulation += number;
  });


  const contextValue = {
    products,
    setProducts,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    totalPopulation,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
