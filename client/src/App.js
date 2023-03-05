import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import React from 'react'
import Home from './components/Home'
import NavBar from './components/navBar';
import About from './components/about'
import Header from './components/Header'
import Feature from './components/feature';
import Profile from './components/profile';
import Create from './components/create';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { useState, useEffect } from 'react';


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/profile')
      .then((res) => {
        if (res.ok) {
          res.json().then((session) => setUser(session))
        } 
        else {
          setUser(null);
        }
      });
  }, []);

  //console.log(user)

  const [text, setText] = useState([]);

    const renderText = async() => {
        let req = await fetch(`/docs/`)
        let res = await req.json()

       // console.log(res)
        setText(res)} 

        useEffect(()=>{

            renderText()
            
        },[]) 

  const router = createBrowserRouter([
  {
    path:"/*",
    element: 
      <div>
        <Header user={user} setUser={setUser}/>
        <h1>404 not found</h1>
      </div>
  },
  {
    path: "/",
    element: 
    <div>
      {/* <Header user={user} setUser={setUser}/> */}
      <Home text={text} />
    </div>
  },
  {
    path:"/login",
    element: 
      <div>
        <Header user={user} setUser={setUser}/>
        <Login setUser={setUser}/>
      </div>
  },
  {
    path: "/signup",
    element: 
      <div>
        <Header user={user} setUser={setUser}/>
        <Signup setUser={setUser}/>
      </div>
  },
  {
    path: "/about",
    element:
      <div>
        {/* <Header user={user} setUser={setUser}/> */}
        <About />
      </div>
  },
  {
    path: "/profile",
    element:
      <div>
        {/* <Header user={user} setUser={setUser}/> */}
        <div className="sidebarcontainer">
          <Profile user={user} text={text}/>
        </div>
      </div>
  },
  {
    path: "/feature",
    element:
      <div>
        {/* <Header user={user} setUser={setUser}/> */}
        <div className="sidebarcontainer">
          <Feature text={text}/>
        </div>
      </div>
  },
  {
    path: "/create",
    element: 
      <div>
        <Header user={user} setUser={setUser}/>
        <Create setUser={setUser} text={text}/>
      </div>
  }
]);
 
  return (
    <div className="App">
      {/* <Home/> */}
     <NavBar router={router}/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
