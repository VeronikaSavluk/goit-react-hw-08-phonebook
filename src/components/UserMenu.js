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
        <Flex align='center' justify='space-between'>
            <Text fontSize={12} mr={15} noOfLines={2}>
                    Welcome to your phonebook, {name}!
            </Text>
            <Button bg='#f1b61ff1' color='#4d4c4c'
                fontSize={16} fontWeight={700}
                w={75} h={30} borderRadius={5}
                variant='outline'
                onClick={() => dispatch(logOut())}
            >Log out</Button>
        </Flex>
    );
};

UserMenu.propTypes = {
    onClick: PropTypes.func,
};

export default UserMenu;