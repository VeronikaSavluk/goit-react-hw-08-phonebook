import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/contacts/filterSlice';
import { Input } from '@chakra-ui/react';

const FilterContactList = () => {
    const dispatch = useDispatch();

    const handleChange = e => {
        e.preventDefault();
        const form = e.target;
        dispatch(setFilter(form.value.toLowerCase()));
    };

    return <Input htmlSize='md' color='#FFFFF0' variant='flushed'
        placeholder='Find contacts by name'
        _placeholder={{ opacity: 0.4, color: 'inherit' }}
        fontSize={{base:'sm', md: 'md'}}
        focusBorderColor='#FFFFF0'
        type='text'
        name='value'
        onChange={handleChange}
    />
};

FilterContactList.propTypes = {
    handleChange: PropTypes.func,
    QueryInputId: PropTypes.func,
}

export default FilterContactList;