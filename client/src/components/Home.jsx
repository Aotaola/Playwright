import React, { useState, useEffect } from "react";
import Selection from "./selection";
// import NavBar from "./navBar";


const Home = ({text}) => {
    
    // const [text, setText] = useState([]);

    // const renderText = async() => {
    //     let req = await fetch(`/docs`)
    //     let res = await req.json()
    //     console.log(res)
    //     setText(res)
    // } 
    

    // useEffect(()=>{
    //     renderText()
    // },[]) 
   
    // const texttext = text.map(textCover =>{
    //     return(
    //         <Selection key = {textCover.id} textCover = {textCover} style={{ display: "inline-block" }}/>
    //         )})
        
    return ( 
        <div className = "selection-wrapper">
            {/* <NavBar /> */}
        <div>   
        <Selection  text={text}/>
        </div>
        </div>
     );
}
 
export default Home;