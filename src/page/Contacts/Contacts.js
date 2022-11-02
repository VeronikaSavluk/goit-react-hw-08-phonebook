import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchContacts} from "redux/contacts/operations";
import { selectIsLoading, selectError } from "redux/contacts/selectors";
import ContactForm from "components/ContactForm";
import FilterContactList from 'components/FilterContactListItem';
import Loader from "components/Loader";
import ContactList from "components/ContactList";
import { Container, Title, LoaderBox, ErrorMessage } from "components/Container.styled";

const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
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
    );
};

export default Contacts;