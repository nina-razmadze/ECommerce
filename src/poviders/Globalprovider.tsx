import { GlobalContext } from '@src/contexts/GlobalContext';
import { PropsWithChildren } from 'react';
import CartProvider from './CartProvider';
import { ContactProvider } from '@src/contexts/ContactContext';
import { ProductProvider } from './ProductProvider';

export default function Globalprovider({ children }: PropsWithChildren) {
  return (
    <GlobalContext.Provider value={{ products: [] }}>
      <ContactProvider>
        <CartProvider>
          <ProductProvider>{children}</ProductProvider>
        </CartProvider>
      </ContactProvider>
    </GlobalContext.Provider>
  );
}
