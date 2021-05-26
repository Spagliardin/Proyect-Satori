import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { CartHolder } from "../../components/Main/CartHolder/CartHolder";
import { Main } from "../../components/Main/Main";
import { ProductContextProvider } from "../../Contexts/ItemsContext";


export const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else{
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }

  return (
    <ProductContextProvider>
      <Header countCartItems={cartItems.length} />
      <Main onAdd={onAdd} />
      <CartHolder onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></CartHolder>
    </ProductContextProvider>
  );
};

