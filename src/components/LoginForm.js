import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import {logIn} from 'redux/auth/operations';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Flex
} from '@chakra-ui/react';

const initialValues = {
    email: '',
    password: ''
};

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
        dispatch(logIn(values));
        resetForm();
    };

    return (
        <Flex direction='column'
            align='center'
            w={300} p={10}
            border={2}
            borderColor='#FFFFF0'
            borderStyle='solid'
            borderRadius={10}
        >
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                {(props) => (
                    <Form >
                        <Field
                            type='email'
                            name='email'
                        >
                            {({ field, form }) => (
                                    <FormControl>
                                        <FormLabel mb={10}>Email</FormLabel>
                                        <Input {...field} htmlSize={30}
                                            borderRadius={5}
                                        mb={10} p={2} color='#4d4c4c'
                                    />
                                    </FormControl>
                                )
                            }
                        </Field>
                        <Field
                            type='password'
                            name='password'
                            required
                        >
                            {({ field, form }) => (
                                <FormControl>
                                    <FormLabel mb={10}>Password</FormLabel>
                                    <Input {...field} htmlSize={30}
                                        borderRadius={5}
                                        mb={10} p={2} color='#4d4c4c'
                                    />
                                </FormControl>
                            )}
                        </Field>
                        <Button my={10} p={2} mb={10}
                            w={100} fontWeight='900'
                            border={1} borderStyle='solid'
                            borderColor='#f1b61ff1' borderRadius={5}
                            bg='#f1b61ff1' color='#4d4c4c'
                            type='submit' name='Log in'>Log in
                        </Button>
                    </Form>
                )}
            </Formik>
        </Flex>
    );
};

LoginForm.propTypes = {
    handleSubmit: PropTypes.func,
    field: PropTypes.object,
    form: PropTypes.object,
};

export default LoginForm;