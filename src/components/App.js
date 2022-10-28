import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectorIsLoading, selectorError } from "redux/selectors";
import ContactForm from './ContactForm';
import FilterContactList from './FilterContactListItem';
import Loader from "./Loader";
import ContactList from './ContactList';
import { Container, Title, LoaderPlace, ErrorMessage } from './Container.styled';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <Title>Contacts</Title>
      <FilterContactList />
      <LoaderPlace>
        {isLoading && !error && <Loader />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </LoaderPlace>
      <ContactList />
    </Container>
  );
}

export default App;