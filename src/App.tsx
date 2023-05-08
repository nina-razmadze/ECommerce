import { lazy, Suspense } from 'react';

import { PublicLayouts } from './layouts/publiclayout';

import { Route, Routes } from 'react-router-dom';
const HomeView = lazy(() => import('./views/HomeView'));
const AuthView = lazy(() => import('./views/AuthView'));
const ProductView = lazy(() => import('./views/ProductView'));
const ProductsView = lazy(() => import('./views/ProductsView'));
function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<PublicLayouts />}>
          <Route path='/' element={<HomeView />} />
          <Route path='/Products/:id' element={<ProductView />} />
          <Route path='/Products' element={<ProductsView />} />
        </Route>
        <Route path='/auth/*' element={<AuthView />} />
      </Routes>
    </Suspense>
  );
}

export default App;
