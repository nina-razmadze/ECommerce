import { PropsWithChildren } from 'react';
import CartProvider from './CartProvider';

import { ProductProvider } from './ProductProvider';
import { adminUser } from '@src/__mocks__/user.mocks';
import FavProductProvider from './FavProductProvider';

import { GlobalContext } from '@src/contexts/GlobalContext';
import { ContactProvider } from '@src/contexts/ContactContext';
import { SearchProvider } from './localeProvider/SearchProvider';

export default function Globalprovider({ children }: PropsWithChildren) {
  return (
    <GlobalContext.Provider value={{ products: [], currentUser: adminUser }}>
      <ContactProvider>
        <CartProvider>
          <ProductProvider>
            <SearchProvider>
              <FavProductProvider>{children}</FavProductProvider>
            </SearchProvider>
          </ProductProvider>
        </CartProvider>
      </ContactProvider>
    </GlobalContext.Provider>
  );
}
