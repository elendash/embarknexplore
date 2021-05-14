import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function Login({ setAuthenticated }) {
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
            setAuthenticated(true);
            setTimeout(() => {
                history.push("/");
            }, 3000);

        }
        )
    }


    return (
        <div className='flex flex-wrap'>
            <div className="grid justify-items-center text-gray-700 dark:bg-green-100 bg-cover h-11/12 p-60 w-3/6 text-center">
                <h1 className="font-extrabold text-5xl uppercase p-3 ml-16 mr-16 mt-1 mb-10">Login User</h1>
                <h4>{msg}</h4>
                <form onSubmit={handleLogin}>
                    <label className="font-semibold text-2xl ">Email</label>
                    <input type="email" name="email" required className=" rounded-lg p-1 w-80 m-6" />
                    <label className="font-semibold text-2xl ">Password</label>
                    <input type="password" name="password" required minLength="6" className=" rounded-lg p-1 w-80 mt-6 mb-20 ml-6" />
                    <input type="submit" className="bg-green-200 rounded-full py-2 px-5" />
                </form>
                <h4 className="p-14" >Hey is you again! Welcome back. Thanks for being a constant contributor!</h4>
            </div>
            <img src="https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=770&q=80" alt="" className="object-full w-6/12 h-5/6" />
        </div>

    )
}