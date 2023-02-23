import React, { useState } from "react";
import Feature from "./feature";


const Selection = () => {
    const [feature, setFeature] = useState(false);
    const handleclick = () => {
        
        setFeature(true);
    console.log(feature);}
    return ( 
       
        <div className= "button-container">
             <div >

        <button class="book-button" onClick={handleclick} >Book</button>
       <span>.                             .</span>
        <button class="book-button" onClick={handleclick}>Book</button>
        <span>.                              .</span>
        <button class="book-button" onClick={handleclick}>Book</button>
        </div>
        <br></br>
         {feature ? <Feature /> : null} 
        </div>
     );
}
export default Selection;