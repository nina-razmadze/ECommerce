import { createContext } from 'react';
import { TUser_Role_Enum, TUser } from '@src/types/user.types';
import { adminUser, standartUser } from '@src/__mocks__/user.mocks';

export type GlobalContextValue = {
  currentUser: TUser;
  products: [];
};

export const GlobalContext = createContext<GlobalContextValue>({
  currentUser: adminUser,
  products: [],
});
