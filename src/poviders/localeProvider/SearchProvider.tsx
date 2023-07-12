import { useState } from 'react';
import { SearchContext } from '@src/contexts/SearchContext';

export interface SearchValue {
  title: string;
}

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState<SearchValue>({
    title: '',
  });

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
