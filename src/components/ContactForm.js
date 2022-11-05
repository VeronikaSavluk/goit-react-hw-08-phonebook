import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {addContact} from "redux/contacts/operations";
import { useSelector } from "react-redux";
import { selectItems } from "redux/contacts/selectors";
import { nanoid } from "nanoid";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    FormErrorMessage,
    Flex
} from "@chakra-ui/react";

const NameInputId = nanoid();
const NumberInputId = nanoid();
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
            borderRadius={15}
        >
            <Formik
            initialValues={initialValues}
            validationSchema={schema}
                onSubmit={handleSubmit}>
                {(props) => (
                    <Form >
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
                                    <Input {...field} mb={10} p={4} />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            id={NumberInputId}
                        >
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor={NumberInputId} mb={10}>Number</FormLabel>
                                    <Input {...field} mb={10} p={4} />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Button p={2} mx='auto' mb={10}
                            w={100} fontWeight='900'
                            border={1} borderStyle='solid'
                            borderColor='#f1b61ff1' borderRadius={15}
                            bg='#f1b61ff1' color='#4d4c4c'
                            type="submit" name="Add contact">Add contact
                        </Button>
                    </Form>
                )}
            </Formik>
        </Flex>
    );
}

ContactForm.propTypes = {
    handleSubmit: PropTypes.func,
    NameInputId: PropTypes.func,
    NumberInputId: PropTypes.func,
}

export default ContactForm;