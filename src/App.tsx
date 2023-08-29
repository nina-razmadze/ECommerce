import { AuthContext, TAuthorizationStage } from "./contexts/AuthContext";
import PriviteRoute from "./components/PriviteRoute/PriviteRoute";
import { lazy, Suspense, useCallback, useContext } from "react";

import { Route, Routes, Navigate } from "react-router-dom";
import { GlobalContext } from "./contexts/GlobalContext";
import { PublicLayouts } from "./layouts/publiclayout";

import { TUser_Role_Enum } from "./types/user.types";
import UserView from "./views/UserView/UserView";

const EditProductForm = lazy(
  () => import("./views/EditProductView/EditProductViewForm/EditProductForm")
);
const ContactView = lazy(() => import("./views/ContactView/ContactView"));
const PeymentView = lazy(() => import("./views/PaymentView/PeymentView"));

const AdminView = lazy(() => import("./views/AdminView/AdminView"));
const EditReportView = lazy(
  () => import("./views/UserView/EditReportView/EditReportView")
);

const ProductView = lazy(() => import("./views/ProductView"));
const EditProductView = lazy(
  () => import("./views/EditProductView/EditProductView")
);

const HomeView = lazy(() => import("./views/HomeView"));
const AuthView = lazy(() => import("./views/AuthView"));
const NewProductView = lazy(
  () => import("./views/NewProductView/NewProductView")
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
  const { currentUser } = useContext(GlobalContext);
  const { status } = useContext(AuthContext);

  const handleRoutes = useCallback((status: TAuthorizationStage) => {
    switch (status) {
      case TAuthorizationStage.AUTHORIZED: {
        return (
          <Routes>
            <Route element={<PublicLayouts />}>
              <Route path="/" element={<div>Authorized</div>} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        );
      }
      case TAuthorizationStage.UNAUTHORIZED: {
        return (
          <Routes>
            <Route element={<PublicLayouts />}>
              <Route
                path="/editProduct"
                element={
                  currentUser.role === TUser_Role_Enum.ADMIN ? (
                    <PriviteRoute
                      currentRole={currentUser.role}
                      allowedRoles={[TUser_Role_Enum.ADMIN]}
                      children={<EditProductView />}
                    />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              <Route
                path="/newProduct"
                element={
                  currentUser.role === TUser_Role_Enum.ADMIN ? (
                    <PriviteRoute
                      currentRole={currentUser.role}
                      allowedRoles={[TUser_Role_Enum.ADMIN]}
                      children={<NewProductView />}
                    />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/editProductForm"
                element={
                  currentUser.role === TUser_Role_Enum.ADMIN ? (
                    <PriviteRoute
                      currentRole={currentUser.role}
                      allowedRoles={[TUser_Role_Enum.ADMIN]}
                      children={<EditProductForm />}
                    />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route path="/pay" element={<PeymentView />} />
              <Route path="/products/:id" element={<ProductView />} />
              <Route path="/contact" element={<ContactView />} />

              <Route path="/user" element={<UserView />} />
              <Route path="/" element={<HomeView />} />
            </Route>
            <Route path="/auth/*" element={<AuthView />} />
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
