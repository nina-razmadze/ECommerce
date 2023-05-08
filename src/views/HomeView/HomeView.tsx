// import { Header } from '@src/layouts/publiclayout/Header';
import { PublicLayouts } from '@src/layouts/publiclayout';
import { lazy, Suspense } from 'react';

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
