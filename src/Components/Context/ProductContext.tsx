import React, {Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { UserProviderProps } from "../../Types/PropsList";
import { Products } from "../../Types/Types";
import { productList } from "../ObjectArrays/ProductList";

export interface InitialProductContextInterface {
    products: Products[],
    setProduct: Dispatch<SetStateAction<Products[]>>
}
const InitialProductContext = {
  products: [
    {
      id: 0,
      name: "",
      child: <></>,
      mPrice: 0,
      dPrice: 0,
      rating: 0,
      category: "",
    },
  ],
  setProduct: () => null,
} as InitialProductContextInterface

export const productContext = createContext(InitialProductContext);

const ProductDataContext = ({ children }: UserProviderProps) => {
  const [products, setProduct] = useState(InitialProductContext.products);
  useEffect(() => {
    const getProductData = () => {
        setProduct(productList)
    }
    getProductData()
  }, []);

  return (
    <productContext.Provider value={{ products, setProduct }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductDataContext;
