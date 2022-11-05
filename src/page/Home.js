import ThemeImage from "../images/phonebook.png";
import { Flex, Heading, Img } from "@chakra-ui/react";

const Home = () => {
    return (
        <Flex direction='column' align='center'>
            <Heading as='h1' mt={90} fontSize={36} textAlign='center' noOfLines={2} >Create your own phonebook</Heading>
            <Img boxSize={[270, 720, 900]} objectFit='cover' src={ThemeImage} alt=''/>
        </Flex>
    );
};

export default Home;