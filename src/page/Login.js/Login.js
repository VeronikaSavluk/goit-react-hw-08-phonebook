import { useSelector } from "react-redux";
import LoginForm from "components/LoginForm/LoginForm";
import { selectError } from "redux/auth/selectors";
import { ErrorMessage } from "components/Container.styled";

const Login = () => {
    const error = useSelector(selectError);

    return (
        <div>
            <h1>Log in</h1>
            <LoginForm />
            {error === "Login error" && (<ErrorMessage>{error}</ErrorMessage>)}
        </div>
    );
};

export default Login;