import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { register } from 'redux/auth/operations';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    FormErrorMessage,
    FormHelperText,
    Flex,
    Box
} from '@chakra-ui/react';

const initialValues = {
    name: '',
    email: '',
    password: ''
};

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(register(values));
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
                    <Form>
                        <Field
                            type='text'
                            name='name'
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            required
                        >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.values.name === ''}>
                                    <FormLabel mb={10}>Name</FormLabel>
                                    <Input {...field} htmlSize={30}
                                        borderRadius={5}
                                        mb={10} p={2} color='#4d4c4c'
                                    />
                                    <Box h={35} w={255} fontSize={7}>
                                        {form.values.name !== '' ? (<FormHelperText>
                                            Name may contain only letters, apostrophe, dash and spaces.
                                            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan
                                        </FormHelperText>) : null}
                                        <FormErrorMessage color='red'>Name is required</FormErrorMessage>
                                    </Box>
                                </FormControl>
                            )}
                        </Field>
                        <Field
                            type='email'
                            name='email'
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            required
                        >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.values.email === ''}>
                                    <FormLabel mb={10}>Email</FormLabel>
                                    <Input {...field} htmlSize={30}
                                        borderRadius={5}
                                        mb={10} p={2} color='#4d4c4c'
                                    />
                                    <Box h={35} w={255} fontSize={7}>
                                        {form.values.email !== '' ? (<FormHelperText>
                                            Email must be a valid email address
                                        </FormHelperText>) : null}
                                        <FormErrorMessage color='red'>Email is required</FormErrorMessage>
                                    </Box>
                                </FormControl>
                            )}
                        </Field>
                        <Field
                            type='password'
                            name='password'
                            required
                        >
                            {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.values.password === ''}>
                                        <FormLabel mb={10}>Password</FormLabel>
                                        <Input {...field} htmlSize={30}
                                            borderRadius={5}
                                            mb={10} p={2} color='#4d4c4c'
                                        />
                                        <Box h={35} w={255} fontSize={7}>
                                            <FormErrorMessage color='red'>Password is required</FormErrorMessage>
                                        </Box>
                                    </FormControl>
                                )
                            }
                        </Field>
                        <Button p={2} mx='auto' mb={10} w={100}
                            fontWeight='900'
                            border={1} borderStyle='solid'
                            borderColor='#f1b61ff1' borderRadius={5}
                            bg='#f1b61ff1' color='#4d4c4c'
                            type='submit' name='Register'>Register
                        </Button>
                    </Form>
                )}
            </Formik>
        </Flex>
    );
};

RegisterForm.propTypes = {
    handleSubmit: PropTypes.func,
};

export default RegisterForm;