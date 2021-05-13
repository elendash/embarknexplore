import { useHistory } from "react-router-dom";
import { useState } from "react";


export default function SignUp(props) {
    const setUserAuth = props.setUser
    console.log(setUserAuth);
    const headers = {
        'Content-Type': 'application/json',
    }
    const history = useHistory();
    const [msg, setMsg] = useState("")
    const handleCreateUser = (event) => {
        event.preventDefault();
        fetch("https://embark-n-explore.herokuapp.com/auth/local/register", {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                username: event.target.username.value,
                email: event.target.email.value,
                password: event.target.password.value
            })
        }).then(res => {
            console.log('Successful registered user');
            console.log(res.data);
            setMsg("Sign up Success! You will be redirected to Login page");
            setTimeout(() => {
                history.push("/login");
            }, 3000);
        })
    }
    return (
        <>
            <h1>New here? Sign up!</h1>
            <h4>{msg}</h4>
            <form onSubmit={handleCreateUser}>
                <label>Username</label>
                <input type="text" name="username" required minLength="6" />
                <label>Password</label>
                <input type="text" name="password" required minLength="6" />
                <label>Email</label>
                <input type="email" name="email" required />
                <input type="submit" />
            </form>
            <h3>Perks of being a memeber...</h3>
            <h4>You can be our top contributor to this
            website, let our community know more fun
            places to bring our furry little one too.
            Also help use valid the information by
            submitting a poll if it is legitimate information.
            Thanks for contributing and build this website better!
                </h4>

        </>
    )
}