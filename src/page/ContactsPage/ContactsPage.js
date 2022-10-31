import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import contactsOperations from "redux/operations";
import { selectIsLoading, selectError } from "redux/selectors";
import ContactForm from 'components/ContactForm';
import FilterContactList from 'components/FilterContactListItem';
import Loader from "components/Loader";
import ContactList from 'components/ContactList';
import { Container, Title, LoaderBox, ErrorMessage } from 'components/Container.styled';

const ContactsPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

    <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <Title>Contacts</Title>
        <FilterContactList />
        <LoaderBox>
            {isLoading && !error && <Loader />}
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </LoaderBox>
        <ContactList />
    </Container>
}

export default ContactsPage;