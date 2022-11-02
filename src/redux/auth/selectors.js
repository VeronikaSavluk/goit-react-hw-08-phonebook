const selectIsLoggedin = state => state.auth.isLoggedin;
const selectUserName = state => state.auth.user.name;

const authSelectors = {
    selectIsLoggedin,
    selectUserName,
}

export default authSelectors;