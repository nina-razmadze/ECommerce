import { Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Wallpaper } from './Wallpaper';

import { SMainContainer } from '@src/components/SMainContainer';
import { SwallpaperContainer } from './Wallpaper/SWallpaper.styled';

const AuthHeader = lazy(() => import('./AuthHeader/AuthHeader'));

export default function AuthLayout() {
  return (
    <SwallpaperContainer>
      <AuthHeader />
      <Outlet />
    </SwallpaperContainer>
  );
}
