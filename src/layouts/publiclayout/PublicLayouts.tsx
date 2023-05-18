import { Footer } from './Footer';
import { Suspense, lazy } from 'react';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

export function PublicLayouts() {
  return (
    <Suspense>
      <Header />
      <Outlet />
      <Footer />
    </Suspense>
  );
}
