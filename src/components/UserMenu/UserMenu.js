import { useSelector, useDispatch } from "react-redux";
import authSelectors from "../../redux/auth/selectors";
import authOperations from "redux/auth/operations";

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.selectUserName);

    return (
        <div>
            <p>Welcome to your phonebook, {name}!</p>
            <button type="button" onClick={() => dispatch(authOperations.logOut())}>Log out</button>
        </div>
    )
}

export default UserMenu;