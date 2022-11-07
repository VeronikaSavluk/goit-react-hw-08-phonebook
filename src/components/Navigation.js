import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { List, ListItem } from '@chakra-ui/react';

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <List as='nav' fontWeight='black' fontSize='xl'>
            <ListItem as={NavLink} to='/' mr={15}>Home</ListItem>
            {isLoggedIn && (
            <ListItem as={NavLink} to='/contacts'>Contacts</ListItem>
            )}
        </List>
    );
};

Navigation.propTypes = {
    isLoggedIn: PropTypes.string,
};

export default Navigation;