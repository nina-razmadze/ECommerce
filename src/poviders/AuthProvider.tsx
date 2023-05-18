import { AuthContext, TAuthorizationStage } from '@src/contexts/AuthContext';
import { PropsWithChildren, useEffect, useState } from 'react';

import { TlogaclStorage } from '../types/localstorage';

export default function AuthProvider({ children }: PropsWithChildren) {
  const [status, setStatus] = useState<TAuthorizationStage>(
    TAuthorizationStage.UNAUTHORIZED
  );
  useEffect(() => {
    if (localStorage.getItem(TlogaclStorage.ACCESSTOKEN)) {
      setStatus(TAuthorizationStage.AUTHORIZED);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ status, setStatus }}>
      {children}
    </AuthContext.Provider>
  );
}
