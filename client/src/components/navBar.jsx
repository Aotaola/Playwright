import React from "react";
// import Selection from "./selection";
// import About from "./about";


const NavBar = () => {
    return (
        <>
         <nav className="nav">
            <a href="/" className = "site-title">PlayWright</a>
            <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/feature">Create</a></li>
                <li><a href="/profile">Profile</a></li>
            </ul>

        </nav>

        <br />

        {/* <Selection/> */}

        <br />
        

        </>
 
 );
}
 
export default NavBar;