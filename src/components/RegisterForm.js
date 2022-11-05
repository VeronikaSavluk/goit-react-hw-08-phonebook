import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import {register} from "redux/auth/operations";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    FormErrorMessage,
    Flex
} from "@chakra-ui/react";

const NameInputId = nanoid();
const EmailInputId = nanoid();
const PasswordInputId = nanoid();

const initialValues = {
    name: '',
    email: '',
    password: ''
};

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.mixed(),
});

const RegisterForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, {resetForm}) => {
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
            borderRadius={15}
        >
            <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
            >
                {(props) => (
                    <Form>
                        <Field
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            id={NameInputId}
                        >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor={NameInputId} mb={10}>Name</FormLabel>
                                    <Input {...field} mb={10} p={4}/>
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field
                            type="email"
                            name="email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            title="Email must be a valid email address"
                            id={EmailInputId}
                            required
                        >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor={EmailInputId} mb={10}>Email</FormLabel>
                                    <Input {...field} mb={10} p={4}/>
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>
                        <Field
                            type="password"
                            name="password"
                            id={PasswordInputId}
                            required
                        >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor={PasswordInputId} mb={10}>Password</FormLabel>
                                    <Input {...field} mb={10} p={4}/>
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                        )}
                         </Field>
                        <Button p={2} mx='auto' mb={10} w={100}
                            fontWeight='900'
                            border={1} borderStyle='solid'
                            borderColor='#f1b61ff1' borderRadius={15}
                            bg='#f1b61ff1' color='#4d4c4c'
                            type="submit" name="Register">Register
                        </Button>
                    </Form>
                )}
            </Formik>
        </Flex>
    )
}

export default RegisterForm;