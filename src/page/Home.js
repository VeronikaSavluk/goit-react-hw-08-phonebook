import ThemeImage from "../images/phonebook.png";
import { Heading } from "@chakra-ui/react";

const Home = () => {
    return (
        <div>
            <Heading as='h1' fontSize={46} noOfLines={[1, 2, 3]}>Create your own phonebook</Heading>
            <img src={ThemeImage} alt="" width={500}/>
        </div>
    )
}

export default Home;