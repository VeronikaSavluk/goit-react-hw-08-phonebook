import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import RegisterForm from 'components/RegisterForm';
import { selectError } from '../redux/auth/selectors';
import { Flex, Box, Heading, Text} from '@chakra-ui/react';

const Register = () => {
    const error = useSelector(selectError);

    return <Flex direction='column' align='center'>
        <Heading as='h2' mt={20} mb={30}
            fontSize={30} fontWeight={500}
            textAlign='center' noOfLines={1}
        >Register</Heading>
        <RegisterForm />
        <Box mt={10} h={30}>
            {error === 'User creation error' && (
            <Text fontSize={16}>
                User creation error/such user is already registered.
            </Text>)}
        </Box>
    </Flex>
};

Register.propTypes = {
    error: PropTypes.string,
};

export default Register;