import PropTypes from 'prop-types';
import ThemeImage from '../images/phonebook.png';
import { Flex, Heading, Img } from '@chakra-ui/react';

const Home = () => {
    return <Flex direction='column' align='center'>
        <Heading as='h1' mt={10} fontSize={36} textAlign='center' noOfLines={2} >Create your own phonebook</Heading>
        <Img boxSize={[270, 700, 720]} objectFit='cover' src={ThemeImage} alt=''/>
    </Flex>
};

Home.propTypes = {
    ThemeImage: PropTypes.string,
};

export default Home;