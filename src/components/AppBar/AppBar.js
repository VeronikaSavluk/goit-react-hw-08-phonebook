import { useSelector } from "react-redux";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import authSelectors from "../../redux/auth/selectors";

const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.selectIsLoggedin);
    return (
        <header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};

export default AppBar;