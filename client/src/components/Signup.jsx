import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
//import Profile from "./profile"

const Signup = ({setUser}) => {
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //const [confirmPassword, setConfirmPassword] = useState("")
     const [bio, setBio] = useState("")
     const [avatar, setAvatar] = useState("")
    const [errors, setErrors] = useState("")

    const [ showForm, setShowForm ] = useState(false)


    const handleClick = () => {
        
          console.log(showForm);
            setShowForm(true)}

    function handleSignUp(e){
        e.preventDefault()
        fetch("/users",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "password": password,
                "email": email,
                "username": username,
                "bio": bio,
                "avatar": avatar
            })
        })
        .then(req => {
            if(req.ok){
                req.json().then(session => {
                     setUser(session)
                    navigate("/")
                })
            }
            else{
                req.json().then(session => {
                    setErrors(session.error)
                })
            }
        })
}
console.log(handleSignUp)




    return (
        <div>
            
            <p> not signed in yet? </p>
            <button className="loginButton" type="submit" onClick={handleClick}>Signup
            </button>
            <form onSubmit={handleSignUp}>
            <label className="loginLabel">
                        Name:
                    <br />
                            <input className="loginInput" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </label>
                <br />
                    <label className="loginLabel">
                        Username:
                    <br />
                            <input className="loginInput" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </label>
                <br />
                    <label className="loginLabel">
                        Bio:
                    <br/>
                            <input className="loginInput" type="text" value={bio} onChange={(e) => setBio(e.target.value)}/>
                    </label>
                
                <br />
                    <label className="loginLabel">
                        Avatar:
                    <br />
                            <input className="loginInput" type="text" value={avatar} onChange={(e) => setAvatar(e.target.value)}/>
                    </label>
                <br />
                <label className="loginLabel">
                        Email:
                    <br />
                            <input className="loginInput" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                <br />
                    <label className="loginLabel">
                        Password:
                    <br />
                            <input className="loginInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                <br/>
                <br/>
                    <button className="loginButton" type="submit">Sign Up!</button>
                </form> 
        </div >
    )}

                
           



    
 
export default Signup;