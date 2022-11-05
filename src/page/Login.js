import { useSelector } from "react-redux";
import LoginForm from "components/LoginForm";
import { selectError } from "redux/auth/selectors";
import { ErrorMessage } from "components/Container.styled";
import { Flex, Heading} from "@chakra-ui/react";

const Login = () => {
    const error = useSelector(selectError);

    return (
        <Flex direction='column' align='center'>
            <Heading as='h2' mt={90} fontSize={30} textAlign='center' noOfLines={1} >Log in</Heading>
            <LoginForm />
            {error === "Login error" && (<ErrorMessage>{error}</ErrorMessage>)}
        </Flex>
    );
};

export default Login;