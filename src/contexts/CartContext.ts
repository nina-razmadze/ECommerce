import { createContext, useState } from 'react';
import { CardProps } from '@src/components/Card/Card';

interface CartContextValue {
  cartItem: CardProps[];
  setCartItem: React.Dispatch<React.SetStateAction<CardProps[]>>;
}
// interface CartModalProps {
//   cartItems: CardProps[];
//   open: boolean;
//   onClose: () => void;
// }
export const CartContext = createContext<CartContextValue>({
  cartItem: [],
  setCartItem: () => {},
});
