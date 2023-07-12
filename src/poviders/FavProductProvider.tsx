import { useState } from 'react';
import { CardProps } from '@src/App';
import { FavProductContext } from '@src/contexts/FavProductContext';

export default function FavProductProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favProduct, setFavProduct] = useState<CardProps[]>([]);
  return (
    <FavProductContext.Provider value={{ favProduct, setFavProduct }}>
      {children}
    </FavProductContext.Provider>
  );
}
