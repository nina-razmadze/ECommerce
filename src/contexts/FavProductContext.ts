import { CardProps } from '@src/App';
import { createContext } from 'react';

interface favProductContext {
  favProduct: CardProps[];
  setFavProduct: React.Dispatch<React.SetStateAction<CardProps[]>>;
}

export const FavProductContext = createContext<favProductContext>({
  favProduct: [],
  setFavProduct: () => {},
});
