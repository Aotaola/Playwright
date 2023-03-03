import React from "react";
// import Selection from "./selection";
// import About from "./about";


const NavBar = () => {
    return (
        <div>
         <nav className="nav">
            <a href="/" className = "site-title">PlayWright</a>
            <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/feature">Create</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/logout">logout</a></li>

            </ul>

        </nav>
        <br />
        <br />
        </div>
 
 );
}
 
export default NavBar;