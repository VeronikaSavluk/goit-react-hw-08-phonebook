import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import * as yup from "yup";
import { ErrorMessage, Formik } from "formik";
import {logIn} from "redux/auth/operations";
import {
    Wrapper,
    NameLable,
    Input,
    ErrorBox,
    Error,
    SubitForm
} from "../ContactForm/ContactForm.styled";

const EmailInputId = nanoid();
const PasswordInputId = nanoid();

const initialValues = {
    email: '',
    password: ''
};

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.mixed(),
});

const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, {resetForm}) => {
        dispatch(logIn(values));
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
                    <SubitForm type="submit" name="Log in">Log in</SubitForm>
                </Wrapper>
            </Formik>
        </div>
    )
}

export default LoginForm;