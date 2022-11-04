import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { selectVisibleContacts } from "redux/contacts/selectors";
import {deleteContact} from "redux/contacts/operations";
import { List, ContactItem, ContactName, ContactNumber, Delete } from "./ContactList/ContactList.styled";

const ContactList = () => {
    const dispatch = useDispatch();
    const visibleContacts = useSelector(selectVisibleContacts);

    return (
        <List>
            {visibleContacts.map(({ id, name, number }) => (
                <ContactItem key={id}>
                    <ContactName>{name}:</ContactName>
                    <ContactNumber>{number}</ContactNumber>
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