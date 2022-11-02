import { useSelector, useDispatch } from "react-redux";
import {selectUserName} from "../../redux/auth/selectors";
import {logOut} from "redux/auth/operations";

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectUserName);

    return (
        <div>
            <p>Welcome to your phonebook, {name}!</p>
            <button type="button" onClick={() => dispatch(logOut())}>Log out</button>
        </div>
    )
}

export default UserMenu;