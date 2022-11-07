import PropTypes from 'prop-types';
import {
    useSelector,
    useDispatch
} from 'react-redux';
import {selectUserName} from '../redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import {
    Flex,
    Text,
    Button
} from '@chakra-ui/react';

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectUserName);

    return (
        <Flex direction={{ base: 'column', md: 'row' }}
            align='center'
            justify='space-between'
        >
            <Text fontSize={{ base: '7', md: '12' }}
                mb={{ base: '10px', md: 0 }} mr={{ md: '15px' }}
                textAlign='center' noOfLines={2}
                w={{ base: '100px', md: '200px' }}>
                Welcome to your phonebook, {name}!
            </Text>
            <Button
                fontSize={14} fontWeight='bold'
                w='80px' h={30} variant='outline'
                onClick={() => dispatch(logOut())}
            >Log out</Button>
        </Flex>
    );
};

UserMenu.propTypes = {
    onClick: PropTypes.func,
};

export default UserMenu;