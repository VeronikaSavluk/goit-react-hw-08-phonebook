import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Flex, Spacer } from '@chakra-ui/react'

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Flex as='header' align='center' >
            <Navigation />
            <Spacer />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
    );
};

export default AppBar;