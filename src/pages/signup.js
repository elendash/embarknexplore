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
        <div className='flex flex-wrap'>
            <div className="grid justify-items-center text-gray-700 bg-green-200 bg-cover h-11/12 p-60 w-3/6 text-center">
                <h1 className="font-extrabold text-5xl uppercase p-3 ml-16 mr-16 mt-32">Sign up</h1>
                <h4 className="text-sm">{msg}</h4>
                <form onSubmit={handleCreateUser}>
                    <label className="font-bold text-2xl block">
                        <span>Username</span>
                        <input type="text" name="username" required minLength="6" className=" rounded-lg w-11/12 mt-10 mb-10" />
                    </label>
                    <label className="font-bold text-2xl block mt-5">
                        <span>Password</span>
                        <input type="text" name="password" required minLength="6" className="rounded-lg w-11/12 mt-6 mb-6" />
                    </label>
                    <label className="font-bold text-2xl block mt-5">
                        <span>Email</span>
                        <input type="email" name="email" required className="rounded-lg w-11/12 mt-6 mb-20" />
                    </label>
                    <input type="submit" className="bg-green-300 rounded-full py-2 px-5" />
                </form>
                <div className="p-32">
                    <h3 className="text-xl font-bold text-gray-700 p-2">Perks of being a memeber...</h3>
                    <h4 className="">You can be our top contributor to this
                    website, let our community know more fun
                    places to bring our furry little one too.
                    Also help use valid the information by
                    submitting a poll if it is legitimate information.
                    Thanks for contributing and build this website better!
                </h4>
                </div>
            </div>
            <img src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80" alt="" className="object-full w-6/12 h-5/6" />
        </div>
    )
}