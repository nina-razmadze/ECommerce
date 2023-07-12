import { CartContext } from '@src/contexts/CartContext';
import { useState } from 'react';

interface CardProps {
  id: any;
  product: string | number;
  category: string;
  desc: string;
  price: string;
  title: string;
  images: any[];
}
export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItem, setCartItem] = useState<CardProps[]>([]);
  return (
    <CartContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </CartContext.Provider>
  );
}
