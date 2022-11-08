import { NavLink } from 'react-router-dom';
import { Flex, Spacer } from '@chakra-ui/react';

export const AuthNav = () => {
    return (
        <Flex fontWeight='bold' fontSize='xl'>
            <NavLink to='/register'>Register</NavLink>
            <Spacer w='20px'/>
            <NavLink to='/login'>Log In</NavLink>
        </Flex>
    );
};