import React, { useState, useEffect } from "react";
import Feature from "./feature";

const Selection = () => {
    const [feature, setFeature] = useState(false);
    const [bookCover, setBookCover] = useState("");

    const handleclick = () => {
        setFeature(true);
    console.log(feature);}


    const renderBook = async() => {
        let req = await fetch("/docs/1")
        let res = await req.json()
        console.log(res)
        setBookCover(res)}

        useEffect(()=>{
            renderBook()
        },[]) 


  

    return ( 
       
        <div className= "button-container">
        <div>
        <span>
        <button class="book-button" style={{ backgroundImage: `url(${bookCover.image_url})` }} onClick={handleclick}></button>
        </span>
         <span>                            </span>
         <button class="book-button" style={{ backgroundImage: `url(${bookCover.image_url})` }} onClick={handleclick}></button>
        <span>                              </span>
        <button class="book-button" style={{ backgroundImage: `url(${bookCover.image_url})` }} onClick={handleclick}></button>
        </div>
        <br></br>
         {feature ? <Feature docText={bookCover}/> : null} 
        </div>
     );
}
export default Selection;