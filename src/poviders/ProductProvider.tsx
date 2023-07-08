import { useState } from 'react';
import { ProductContext } from '@src/contexts/ProductContext';
import { Product } from '@src/components/product';

export interface Product {
  category: string;
  title: string;
  price: number;
  description: string;
  color: string;
  brand: string;
}
export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [productInfo, setProductInfo] = useState<Product>({
    description: '',
    price: 0,
    category: '',
    title: '',
    color: '',
    brand: '',
  });
  return (
    <ProductContext.Provider value={{ productInfo, setProductInfo }}>
      {children}
    </ProductContext.Provider>
  );
}
