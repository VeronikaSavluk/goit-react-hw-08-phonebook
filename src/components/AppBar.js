import { useSelector } from "react-redux";
import Navigation from "components/Navigation";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Flex } from '@chakra-ui/react'

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Flex as='header' align='center' justify='space-between'>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
    );
};

export default AppBar;