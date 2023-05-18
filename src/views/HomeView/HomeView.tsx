import { lazy, Suspense } from 'react';
import { SearchProduct } from './searchProduct';

const HomeNavigation = lazy(() => import('./HomeNavigation'));
const HomeContent = lazy(() => import('./HomeContent'));

export default function HomeView() {
  return (
    <Suspense>
      <HomeNavigation />
      <HomeContent />
    </Suspense>
  );
}
