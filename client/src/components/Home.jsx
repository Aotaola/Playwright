import React, { useState, useEffect } from "react";
import Selection from "./selection";



const Home = () => {
    
    const [text, setText] = useState([]);

    const renderText = async() => {
        let req = await fetch(`/docs/`)
        let res = await req.json()
        console.log(res)
        setText(res)}

        useEffect(()=>{
            renderText()
        },[]) 
    
    
    return ( 
        <div className = "selection-wrapper" >
            
        <div style={{ display: "inline-block" }}>
        {text? (
            text.map(textCover =>{
                return(
                    <Selection key = {textCover.id} textCover = {textCover} style={{ display: "inline-block" }}/>
                    )
                })
                ):(
                    null
                    )}
                    
                    
        </div>
                    </div>
     );
}
 
export default Home;