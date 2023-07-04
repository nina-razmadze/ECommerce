import { useState } from 'react';
import { ProductContext } from '@src/contexts/ProductContext';

export interface Product {
  category: string;
  product: number | string;
  title: string;
}

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [productInfo, setProductInfo] = useState<Product>({
    category: '',
    product: '',
    title: '',
  });
  return (
    <ProductContext.Provider value={{ productInfo, setProductInfo }}>
      {children}
    </ProductContext.Provider>
  );
}
