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
        <Heading as='h2' mt={20} mb={30}
            fontSize={40} fontWeight={700}
            textAlign='center' noOfLines={1}
        >Phonebook</Heading>
        <Flex justifyContent='space-evenly'>
            <ContactForm />
            <Flex direction='column' w={500} align='stretch' ml={20}>
                <Grid templateColumns={'1fr 2fr'} justifyItems='end' alignItems='center'>
                    <Heading as='h3' mb={10}
                        fontSize={30} fontWeight={500}
                        textAlign='center' noOfLines={1}
                        justifySelf='start'
                    >Contacts</Heading>
                    <FilterContactList />
                </Grid>
                <Center mb={10} h={20}>
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