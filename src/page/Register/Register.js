import { useSelector } from "react-redux";
import RegisterForm from "components/RegisterForm/RegisterForm";
import { selectError } from "../../redux/auth/selectors";
import { ErrorMessage } from "components/Container.styled";

const Register = () => {
    const error = useSelector(selectError);

    return (
        <div>
            <h1>Register</h1>
            <RegisterForm />
            {error === "User creation error" && (<ErrorMessage>User creation error/such user is already registered.</ErrorMessage>)}
        </div>
    )
}

export default Register;