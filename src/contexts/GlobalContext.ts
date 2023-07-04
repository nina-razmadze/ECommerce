import { createContext } from 'react';

type GlobalContextValue = {
  products: [];
};
export const GlobalContext = createContext<GlobalContextValue>({
  products: [],
});
