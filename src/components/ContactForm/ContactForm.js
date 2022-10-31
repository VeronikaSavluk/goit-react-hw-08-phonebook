import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import contactsOperations from "redux/operations";
import { useSelector } from "react-redux";
import { selectItems } from "redux/selectors";
import { nanoid } from "nanoid";
import {ErrorMessage, Formik} from "formik";
import * as yup from "yup";
import {
    Wrapper,
    NameLable,
    Input,
    ErrorBox,
    Error,
    SubitForm
} from "./ContactForm.styled";

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
        dispatch(contactsOperations.addContact(values));
        resetForm();
    };

    return (
        <div>
            <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}>
                <Wrapper>
                    <NameLable htmlFor={NameInputId}>Name</NameLable>
                    <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    id={NameInputId}
                    />
                    <ErrorBox><ErrorMessage name="name" render={msg => <Error>{`Please, enter Name`}</Error>} /></ErrorBox>
                    <NameLable htmlFor={NumberInputId}>Number</NameLable>
                    <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    id={NumberInputId}
                    />
                    <ErrorBox><ErrorMessage name="number" render={msg => <Error>{`Please, enter Number`}</Error>}/></ErrorBox>
                    <SubitForm type="submit" name="Add contact">Add contact</SubitForm>
                </Wrapper>
            </Formik>
        </div>
    );
}

ContactForm.propTypes = {
    handleSubmit: PropTypes.func,
    NameInputId: PropTypes.func,
    NumberInputId: PropTypes.func,
}

export default ContactForm;