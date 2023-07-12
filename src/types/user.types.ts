export enum TUser_Role_Enum {
  ADMIN = 'admin',
  USER = 'user',
}
export type TUser = {
  username: string;
  role: TUser_Role_Enum;
};
