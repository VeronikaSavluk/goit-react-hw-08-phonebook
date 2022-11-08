import { NavLink } from 'react-router-dom';
import { List, ListItem } from '@chakra-ui/react';

export const AuthNav = () => {
    return (
        <List as='nav' fontWeight='bold' fontSize='xl'>
            <ListItem as={NavLink} to='/register' mr={15}>Register</ListItem>
            <ListItem as={NavLink} to='/login'>Log In</ListItem>
        </List>
    );
};