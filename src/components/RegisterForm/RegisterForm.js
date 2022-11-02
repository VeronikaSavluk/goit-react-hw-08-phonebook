import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import * as yup from "yup";
import { ErrorMessage, Formik } from "formik";
import authOperations from "redux/auth/operations";
import {
    Wrapper,
    NameLable,
    Input,
    ErrorBox,
    Error,
    SubitForm
} from "../ContactForm/ContactForm.styled";

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
        dispatch(authOperations.register(values));
        resetForm();
    };

    return (
        <div>
            <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
            >
                <Wrapper>
                    <NameLable htmlFor={NameInputId}>Name</NameLable>
                    <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    id={NameInputId}
                    required
                    />
                    <ErrorBox><ErrorMessage name="name" render={msg => <Error>{`Please, enter Name`}</Error>} /></ErrorBox>
                    <NameLable htmlFor={EmailInputId}>Email</NameLable>
                    <Input
                    type="email"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    title="Email must be a valid email address"
                    id={EmailInputId}
                    required
                    />
                    <ErrorBox><ErrorMessage name="email" render={msg => <Error>{`Please, enter Email`}</Error>}/></ErrorBox>
                    <NameLable htmlFor={PasswordInputId}>Password</NameLable>
                    <Input
                    type="password"
                    name="password"
                    id={PasswordInputId}
                    required
                    />
                    <ErrorBox><ErrorMessage name="password" render={msg => <Error>{`Please, enter Password`}</Error>}/></ErrorBox>
                    <SubitForm type="submit" name="Register">Register</SubitForm>
                </Wrapper>
            </Formik>
        </div>
    )
}

export default RegisterForm;