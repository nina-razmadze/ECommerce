import { Outlet } from 'react-router-dom';

import { Wallpaper } from './Wallpaper';

import { SMainContainer } from '@src/components/SMainContainer';
import { SwallpaperContainer } from './Wallpaper/SWallpaper.styled';

export default function AuthLayout() {
  return (
    <SMainContainer>
      <SwallpaperContainer>
        <Outlet />
      </SwallpaperContainer>
    </SMainContainer>
  );
}
