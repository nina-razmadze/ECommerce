import { TUser, TUser_Role_Enum } from '@src/types/user.types';

export const standartUser: TUser = {
  username: 'john doe',
  role: TUser_Role_Enum.USER,
};
export const adminUser: TUser = {
  username: ' admin john doe',
  role: TUser_Role_Enum.ADMIN,
};
