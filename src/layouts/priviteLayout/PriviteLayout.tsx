import { Outlet } from 'react-router-dom';
import { PriviteHeader } from './PriviteHeader';

export function PriviteLayout() {
  return (
    <div>
      <PriviteHeader />
      <Outlet />
    </div>
  );
}
