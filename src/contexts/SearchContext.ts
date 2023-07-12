import { createContext, useState } from 'react';

export interface SearchValue {
  title: string;
}

interface SearchContextValue {
  search: SearchValue;
  setSearch: React.Dispatch<React.SetStateAction<SearchValue>>;
}
export const SearchContext = createContext<SearchContextValue>({
  search: {
    title: '',
  },
  setSearch: () => {},
});
