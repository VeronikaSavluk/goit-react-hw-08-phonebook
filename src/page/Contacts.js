import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchContacts} from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import ContactForm from 'components/ContactForm';
import FilterContactList from 'components/FilterContactListItem';
import Loader from 'components/Loader';
import ContactList from 'components/ContactList';
import { Flex, Box, Center, Heading, Grid} from '@chakra-ui/react';

const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return <Flex direction='column' justifyContent='space-evenly'>
        <Heading as='h2' mt={{ base: '30px', md: '80px' }}
            mb={{ base: '10px', md: '30px' }}
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight='medium'
            textAlign='center' noOfLines={1}>
            Phonebook
        </Heading>
        <Flex direction={{ base: 'column', md: 'row' }}
            justifyContent='space-evenly' alignItems='flex-end'>
            <ContactForm />
            <Flex direction='column' w={{base:'280px', md: '355px'}} align='stretch'>
                <Grid templateColumns={{base:'1fr 1fr', md: '1rf 2fr'}} justifyItems='end' alignItems='center'>
                    <Heading as='h3' fontSize={{base:'2xl', md: '4xl'}}
                        fontWeight='medium'
                        textAlign='center'
                        noOfLines={1}
                        justifySelf='start'>
                        Contacts
                    </Heading>
                    <FilterContactList />
                </Grid>
                <Center my={1} h='20px'>
                    {isLoading && !error && <Loader />}
                    {error && <Box>{error}</Box>}
                </Center>
                <ContactList />
            </Flex>
        </Flex>
    </Flex>
};

Contacts.propTypes = {
    isLoggedIn: PropTypes.bool,
    error: PropTypes.string,
};

export default Contacts;