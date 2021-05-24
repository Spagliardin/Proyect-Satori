import React from "react";
import { Main } from "../../components/Main/Main";
import { ProductContextProvider } from '../../Contexts/ItemsContext'

export const Home = () => {
  return (
    <ProductContextProvider>
      <Main />
    </ProductContextProvider>
  );
};
