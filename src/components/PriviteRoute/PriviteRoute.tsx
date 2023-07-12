import { Navigate, Route } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { TUser_Role_Enum } from '@src/types/user.types';

type PriviteRouteProps = {
  currentRole: TUser_Role_Enum;
  allowedRoles: TUser_Role_Enum[];
};

export default function PriviteRoute({
  children,
  currentRole,
  allowedRoles,
}: PropsWithChildren<PriviteRouteProps>) {
  if (allowedRoles.includes(currentRole)) {
    return <>{children}</>;
  }
  return <Navigate to='/' />;
}
