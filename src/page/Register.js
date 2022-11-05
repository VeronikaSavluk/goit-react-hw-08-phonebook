import { useSelector } from "react-redux";
import RegisterForm from "components/RegisterForm";
import { selectError } from "../redux/auth/selectors";
import { ErrorMessage } from "components/Container.styled";
import { Flex, Heading} from "@chakra-ui/react";

const Register = () => {
    const error = useSelector(selectError);

    return (
        <Flex direction='column' align='center'>
            <Heading as='h2' mt={90} fontSize={30} textAlign='center' noOfLines={1}>Register</Heading>
            <RegisterForm />
            {error === "User creation error" && (<ErrorMessage>User creation error/such user is already registered.</ErrorMessage>)}
        </Flex>
    );
};

export default Register;