//import Profile from "./profile";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import Signup from "./Signup";

const Login = ({setUser}) => {


    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState("");

    console.log(username)
    console.log(password)

    function handleLogin(e){
        e.preventDefault()
        fetch("/login",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
        .then(req => {
            if(req.ok){
                req.json().then((session) => {
                    setUser(session)
                    navigate("/")
                })
            }
            else{
                req.json().then((session) => {
                    setErrors(session.error)
                })
            }
        })
    }


    return ( 
        <div className="login-container">
            <h2>Login.</h2>
            <br/>            
            <div className="logincontainerall">
                <form onSubmit={handleLogin}>
                    <label className="loginLabel">
                        Username:
                    <br />
                            <input className="loginInput" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </label>
                <br />
                    <label className="loginLabel">
                        Password:
                    <br />
                            <input className="loginInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                <br/>
                    <button className="loginButton" type="submit">Login</button>
                    
                </form>
                <br/>
            </div>
            <br/>
            <a href="/Signup">Sign Up!</a>
            <br></br>
        </div>
    )
}
 
export default Login;