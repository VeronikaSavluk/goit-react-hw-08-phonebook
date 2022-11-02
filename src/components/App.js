import { useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import Layout from "./Layout";
import Loader from "./Loader"
import {fetchCurrentUser} from "redux/auth/operations";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
import { selectIsRefreshing } from "redux/auth/selectors";

const HomePage = lazy(() => import("page/Home/Home"));
const RegisterPage = lazy(() => import("page/Register/Register"));
const LoginPage = lazy(() => import("page/Login.js/Login"));
const ContactsPage = lazy(() => import("page/Contacts/Contacts"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
          <Route path="/register" element={<RestrictedRoute path="/contacts" component={<RegisterPage />} />} />
          <Route path="/login" element={<RestrictedRoute path="/contacts" component={<LoginPage />} />} />
        <Route path="/contacts" element={<PrivateRoute path="/login" component={<ContactsPage />} />} />
        </Route>
      </Routes>
  );
};

export default App;