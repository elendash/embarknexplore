import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function Login(props) {
    const setUserAuth = props.setUser
    console.log(setUserAuth);
    const [msg, setMsg] = useState("")
    const headers = {
        'Content-Type': 'application/json',
    }
    const history = useHistory();

    const handleLogin = (event) => {
        event.preventDefault();
        fetch("https://embark-n-explore.herokuapp.com/auth/local", {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                identifier: event.target.email.value,
                password: event.target.password.value
            })
        }).then(res => {
            console.log(res.data);
            setMsg("Login Success! You will be redirected to Home page");
            setTimeout(() => {
                history.push("/");
            }, 3000);

        }
        )
    }


    return (
        <>
            <h1>Login User</h1>
            <h4>{msg}</h4>
            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input type="email" name="email" required />
                <label>Password</label>
                <input type="password" name="password" required minLength="6" />
                <input type="submit" />
            </form>
            <h4>Hey is you again! Welcome back. Thanks for being a constant contributor!</h4>
        </>
    )
}