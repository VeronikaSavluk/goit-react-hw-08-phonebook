import { useSelector } from "react-redux";
import Navigation from "components/Navigation";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Box } from '@chakra-ui/react'

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Box as='header' display='flex' alignItems="center" justifyContent="space-between">
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
    );
};

export default AppBar;