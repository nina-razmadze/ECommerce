import { PropsWithChildren } from 'react';
import { SwallpaperContainer } from './SWallpaper.styled';

export function Wallpaper({ children }: PropsWithChildren) {
  return <SwallpaperContainer>{children}</SwallpaperContainer>;
}
