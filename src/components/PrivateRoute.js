import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {selectIsLoggedIn, selectIsRefreshing} from "redux/auth/selectors";

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    console.log(redirectTo);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const shouldRedirect = !isLoggedIn && !isRefreshing;
    return shouldRedirect ? <Navigate redirectTo={ redirectTo } /> : Component;
};

export default PrivateRoute;