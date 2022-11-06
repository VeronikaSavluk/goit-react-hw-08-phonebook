import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import {deleteContact} from 'redux/contacts/operations';
import {
    List,
    ListItem,
    Grid,
    GridItem,
    Button
} from '@chakra-ui/react';

const ContactList = () => {
    const dispatch = useDispatch();
    const visibleContacts = useSelector(selectVisibleContacts);

    return (
        <List>
            {visibleContacts.map(({ id, name, number }) => (
                <ListItem key={id}>
                    <Grid templateAreas={`'name number button'`}
                        templateColumns='repeat(5, 1fr)'
                        justifyItems='end' gap='1'>
                        <GridItem colSpan={2} pl={3} justifySelf='start' area={'name'}>{name}:</GridItem>
                        <GridItem colSpan={2} pl={3} area={'number'}>{number}</GridItem>
                        <GridItem colSpan={1} area={'button'}>
                            <Button w={70} mb={5}
                                fontSize={14} fontWeight='500'
                                border='none' borderRadius={5}
                                bg='#f1b61ff1' color='#4d4c4c'
                                type='submit' name='Delete'
                                onClick={() => dispatch(deleteContact(id))}
                            >Delete</Button>
                        </GridItem>
                    </Grid>
                </ListItem>
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