import { Footer } from './Footer';
import { Suspense, lazy } from 'react';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

import { SPublicLayoutContainerWrapper } from './SPublicLayout.styled';
import { SOutletWrapperContainer } from './SPublicLayout.styled';

// const Header = lazy(() => import('./Header'));

export function PublicLayouts() {
  return (
    <Suspense>
      <Header />
      <SPublicLayoutContainerWrapper>
        <SOutletWrapperContainer>
          <Outlet />
        </SOutletWrapperContainer>
      </SPublicLayoutContainerWrapper>
      <Footer />
    </Suspense>
  );
}
