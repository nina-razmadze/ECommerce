import { PublicLayouts } from './layouts/publiclayout';
import { SubmitHandler } from 'react-hook-form';
import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense, useCallback, useContext } from 'react';
import { useState } from 'react';
import { PriviteLayout } from './layouts/priviteLayout/PriviteLayout';
import { AuthContext, TAuthorizationStage } from './contexts/AuthContext';
import UserView from './views/UserView/UserView';
import { useForm } from 'react-hook-form';
import { CartContext } from './contexts/CartContext';
const HomeView = lazy(() => import('./views/HomeView'));
const AuthView = lazy(() => import('./views/AuthView'));

const EditProductForm = lazy(
  () => import('./views/EditProductView/EditProductViewForm/EditProductForm')
);
const ProductView = lazy(() => import('./views/ProductView'));
const ProductsView = lazy(() => import('./views/ProductsView'));

const ContactView = lazy(() => import('./views/ContactView/ContactView'));
const PeymentView = lazy(() => import('./views/PaymentView/PeymentView'));

const AdminView = lazy(() => import('./views/AdminView/AdminView'));

const EditProductView = lazy(
  () => import('./views/EditProductView/EditProductView')
);

const NewProductView = lazy(
  () => import('./views/NewProductView/NewProductView')
);
const EditReportView = lazy(
  () => import('./views/UserView/EditReportView/EditReportView')
);
export interface CardProps {
  id: any;
  desc: string;
  price: string;
  title: string;
  images: string[];
  category: string;
  product: number | string;
}

function App() {
  const onSubmit: SubmitHandler<CardProps> = (data) => {
    setCartItem((prev) => [...prev, data]);
  };
  const { cartItem, setCartItem } = useContext(CartContext);

  const { register } = useForm();
  const [openProduct, setOpenProduct] = useState(true);

  const { status } = useContext(AuthContext);

  // const handleClose = () => {
  //   setOpenProduct(false);
  // };
  const handleRoutes = useCallback((status: TAuthorizationStage) => {
    switch (status) {
      case TAuthorizationStage.AUTHORIZED: {
        return (
          <Routes>
            <Route element={<PriviteLayout />}>
              <Route path='/' element={<div>Authorized</div>} />
              <Route path='*' element={<Navigate to='/' />} />
            </Route>
          </Routes>
        );
      }
      case TAuthorizationStage.UNAUTHORIZED: {
        return (
          <Routes>
            <Route element={<PublicLayouts />}>
              <Route path='/' element={<HomeView />} />
              <Route path='/user' element={<UserView />} />

              <Route path='/pay' element={<PeymentView />} />
              {/* <Route
                path='/adminView'
                element={<AdminView open={openProduct} data={register} />}
              /> */}
              {/* <Route path='/editReport' element={<EditReportView />} /> */}
              <Route path='/newProduct' element={<NewProductView />} />

              <Route path='/Products' element={<ProductsView />} />
              <Route path='/Products/:id' element={<ProductView />} />
            </Route>
            <Route path='/auth/*' element={<AuthView />} />
            <Route path='/Contact' element={<ContactView />} />
            <Route path='/editProductForm' element={<EditProductForm />} />

            <Route path='/editProduct' element={<EditProductView />} />
          </Routes>
        );
      }
    }
  }, []);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {handleRoutes(status)}
      </Suspense>
    </>
  );
}

export default App;
