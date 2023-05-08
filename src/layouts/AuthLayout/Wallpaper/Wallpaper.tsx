import { PropsWithChildren } from 'react';
import { SwallpaperContainer } from './SWallpaper.styled';
import { STransparentBox } from '@src/components/TransparentContainer/STransparentContainer.styled';
// import { SWallTransparentBox } from './SWallpaper.styled';

export function Wallpaper({ children }: PropsWithChildren) {
  return <SwallpaperContainer>{children}</SwallpaperContainer>;
}
