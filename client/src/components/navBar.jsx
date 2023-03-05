import React from "react";




const NavBar = () => {
    return (
        <div>
         <nav className="nav">
                {/* <RouterProvider router={router} /> */}
            <a href="/" className = "site-title">PlayWright</a>
            <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/create">Create</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/logout">logout</a></li>
            </ul>
        </nav>
        </div>
 
 );
}
 
export default NavBar;