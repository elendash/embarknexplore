import axios from 'axios';
import { Redirect } from "react-router-dom";
import Cookie from "js-cookie";

export default function Login(props) {
    const setUserAuth = props.setUser
    console.log(setUserAuth);
    const handleLogin = (username, password) => {
        new Promise((resolve, reject) => {
            axios
                .post("https://embark-n-explore.herokuapp.com/auth/local/", { username, password })
                .then((res) => {
                    Cookie.set("token", res.data.jwt);
                    resolve(res);
                    setUserAuth("login");
                    <Redirect to="/" />
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }


    return (
        <>
            <h1>Login User</h1>
            <form onSubmit={handleLogin}>
                <label>User Name</label>
                <input type="text" name="username" />
                <label>Password</label>
                <input type="password" name="password" />
                <input type="submit" />
            </form>
        </>
    )
}