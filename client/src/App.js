import './App.css';
import React from 'react'
import Home from './components/home'
import NavBar from './components/navBar';
import About from './components/about'
import Feature from './components/feature';
import Profile from './components/profile';

function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Home />
      break
      case "/about":
        component = <About/>
      break
    case "/feature":
      component = <Feature/>
    break
    case "/profile":
      component = <Profile/>
    break
    default:
  component = <Home />
    break
   } 
  return (
    <div className="App">
      {/* <xHome/> */}
     <NavBar/>
     {component}
    </div>
  );
}

export default App;
