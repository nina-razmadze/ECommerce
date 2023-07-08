import { createContext } from 'react';

export interface Product {
  category: string;
  title: string;
  price: number;
  description: string;
  color: string;
  brand: string;
}

export interface ProductContextValue {
  productInfo: Product;
  setProductInfo: React.Dispatch<React.SetStateAction<Product>>;
}

export const ProductContext = createContext<ProductContextValue>({
  productInfo: {
    brand: '',
    description: '',
    price: 0,
    category: '',
    title: '',
    color: '',
  },
  setProductInfo: () => {},
});
