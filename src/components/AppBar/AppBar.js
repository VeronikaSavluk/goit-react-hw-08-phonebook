import Navigation from "components/Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import Register from "../Register/Register";
import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
    <header>
        <Navigation />
        <UserMenu />
        <AuthNav />
        <Register />
</header>
};

export default AppBar;