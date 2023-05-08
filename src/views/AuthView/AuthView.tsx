import { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

import AuthLayout from '@src/layouts/AuthLayout/AuthLayout';

const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const HomeView = lazy(() => import('../HomeView/HomeView'));

export default function AuthView() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/homeView' element={<HomeView />}></Route>
          <Route path='/login' element={<LoginView />}></Route>
          <Route path='/register' element={<RegisterView />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
