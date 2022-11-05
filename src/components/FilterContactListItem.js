import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/contacts/filterSlice";
import { nanoid } from "nanoid";
import { Box, Input } from '@chakra-ui/react';

const FilterContactList = () => {
    const QueryInputId = nanoid();
    const dispatch = useDispatch();

    const handleChange = e => {
        e.preventDefault();
        const form = e.target;
        dispatch(setFilter(form.value.toLowerCase()));
    };

    return (
        <Box mb={10} border="none" borderRadius={5}>
            <Input placeholder='Find contacts by name'
                type="text"
                name="value"
                id={QueryInputId}
                onChange={handleChange}
        />
        </Box>
    )
}

FilterContactList.propTypes = {
    handleChange: PropTypes.func,
    QueryInputId: PropTypes.func,
}

export default FilterContactList;