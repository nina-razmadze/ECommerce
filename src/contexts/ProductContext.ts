import { createContext } from 'react';

export interface Product {
  category: string;
  product: number | string;
  title: string;
}

export interface ProductContextValue {
  productInfo: Product;
  setProductInfo: React.Dispatch<React.SetStateAction<Product>>;
}

export const ProductContext = createContext<ProductContextValue>({
  productInfo: {
    category: '',
    product: '',
    title: '',
  },
  setProductInfo: () => {},
});
