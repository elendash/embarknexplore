import { Route, useHistory, } from "react-router-dom";
export default function ProtectedRoute({ User, isAuthenticated, logout, ...rest }) {
    const history = useHistory();

    return (<Route {...rest} render={(props) => {
        if (isAuthenticated) {
            return <User logout={logout} />;
        } else {
            history.push("/login")
        }
    }} />)
}