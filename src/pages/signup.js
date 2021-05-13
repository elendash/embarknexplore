import axios from 'axios';
import { useState } from 'react'
import Cookie from "js-cookie";
import { Redirect, useHistory } from "react-router-dom";


export default function SignUp() {
    const [user, setUser] = useState("null");
    const [emailAdd, setEmailAdd] = useState("null");
    const [pW, setPW] = useState("null");
    const history = useHistory();

    const handleCreateUser = (event) => {
        event.preventDefault();
        setUser(event.target.username.value);
        setEmailAdd(event.target.email.value);
        setPW(event.target.password.value);
        if (user || emailAdd || pW === "null") {
            return <h4>Input required.</h4>
        }
        fetch("https://embark-n-explore.herokuapp.com/auth/local/register", {
            method: 'POST',
            username: user,
            email: emailAdd,
            password: pW,
        }).then(res => {
            console.log('Successful registered user');
            console.log('User profile', res.data.user);
            console.log('User token', res.data.jwt);
        })
            .catch(error => {
                console.log('An error occurred:', error.response);
            });
    }
    return (
        <>
            <form onSubmit={handleCreateUser}>
                <label>Username</label>
                <input type="text" name="username" required minlength="6" />
                <label>Password</label>
                <input type="text" name="password" required minlength="6" />
                <label>Email</label>
                <input type="email" name="email" required />
                <input type="submit" />
            </form>
        </>
    )
}