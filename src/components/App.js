import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectIsLoading, selectError } from "redux/selectors";
import ContactForm from './ContactForm';
import FilterContactList from './FilterContactListItem';
import Loader from "./Loader";
import ContactList from './ContactList';
import { Container, Title, LoaderBox, ErrorMessage } from './Container.styled';

function App() {
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
}

export default App;