import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { selectorItems, selectorFilter } from "redux/selectors";
import { deleteContact } from "redux/operations";
import { List, ContactItem, DataContact, Delete } from "./ContactList.styled";

const ContactList = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectorItems);
    const filter = useSelector(selectorFilter);

    const visibleContacts = filter
        ? items.filter(contact => contact.name.toLowerCase().includes(filter))
        : items;

    return (
        <List>
            {visibleContacts.map(({ id, name, number }) => (
                <ContactItem key={id}>
                    <DataContact>{name}:</DataContact>
                    <DataContact>{number}</DataContact>
                    <Delete onClick={() => dispatch(deleteContact(id))}>Delete</Delete>
                </ContactItem>
            ))}
        </List>
    );
};

ContactList.propTypes = {
    visibleContacts: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string,
        }),
    ),
};

export default ContactList;