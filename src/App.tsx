import { PublicLayouts } from './layouts/publiclayout';

import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense, useCallback, useContext } from 'react';

import { PriviteLayout } from './layouts/priviteLayout/PriviteLayout';
import { AuthContext, TAuthorizationStage } from './contexts/AuthContext';
import { CartModal } from './components/CartModal';
import { useState } from 'react';

const HomeView = lazy(() => import('./views/HomeView'));
const AuthView = lazy(() => import('./views/AuthView'));

const ProductView = lazy(() => import('./views/ProductView'));
const ProductsView = lazy(() => import('./views/ProductsView'));

function App() {
  const [cartModal, setcartModal] = useState<boolean>(true);
  const { status } = useContext(AuthContext);
  const handleRoutes = useCallback((status: TAuthorizationStage) => {
    switch (status) {
      case TAuthorizationStage.AUTHORIZED: {
        return (
          <Routes>
            <Route element={<PriviteLayout />}>
              <Route path='/' element={<div>Authorized</div>} />
              <Route path='*' element={<Navigate to='/' />} />
            </Route>
          </Routes>
        );
      }
      case TAuthorizationStage.UNAUTHORIZED: {
        return (
          <Routes>
            <Route element={<PublicLayouts />}>
              <Route path='/' element={<HomeView />} />
              <Route path='/Products/:id' element={<ProductView />} />
              <Route path='/Products' element={<ProductsView />} />
            </Route>
            <Route path='/auth/*' element={<AuthView />} />
          </Routes>
        );
      }
    }
  }, []);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {handleRoutes(status)}
      </Suspense>
      <CartModal open={cartModal} onClose={() => setcartModal(false)} />
    </>
  );
}

export default App;
