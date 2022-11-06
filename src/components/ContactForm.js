import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {addContact} from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { selectItems } from 'redux/contacts/selectors';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
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
    number: ''
};

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required(),
});

function ContactForm() {
    const dispatch = useDispatch();
    const items = useSelector(selectItems);
    const handleSubmit = (values, { resetForm }) => {
        if (items.find(contact => contact.name === values.name)) {
            alert(`${values.name} is already in contacts`);
            return;
        };
        dispatch(addContact(values));
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
                            type='text'
                            name='name'
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            required
                        >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name}>
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
                            type='tel'
                            name='number'
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            required
                        >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name}>
                                    <FormLabel mb={10}>Number</FormLabel>
                                    <Input {...field} htmlSize={30}
                                        borderRadius={5}
                                        mb={10} p={4} color='#4d4c4c'
                                    />
                                    <Box h={35} w={255} fontSize={7}>
                                        {form.values.number !== '' ? (<FormHelperText>
                                            Phone number must be digits and can contain spaces, dashes, parentheses and can start with +
                                        </FormHelperText>) : null}
                                        <FormErrorMessage color='red'>Number is required</FormErrorMessage>
                                    </Box>
                                </FormControl>
                            )}
                        </Field>
                        <Button p={2} mx='auto' mb={10}
                            w={120} fontSize={14}
                            fontWeight='900'
                            border='none' borderRadius={5}
                            bg='#f1b61ff1' color='#4d4c4c'
                            type='submit' name='Add contact'>Add contact
                        </Button>
                    </Form>
                )}
            </Formik>
        </Flex>
    );
};

ContactForm.propTypes = {
    handleSubmit: PropTypes.func,
};

export default ContactForm;