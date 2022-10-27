import ContactForm from './ContactForm';
import FilterContactList from './FilterContactListItem';
import ContactList from './ContactList';
import { Container, Title } from './Container.styled';

function App () {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <Title>Contacts</Title>
      <FilterContactList />
      <ContactList />
    </Container>
  );
}

export default App;