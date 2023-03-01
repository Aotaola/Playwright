 import React, { useState } from "react";
 import Feature from "./feature";
 


const Selection = ({textCover}) => {

  const {title, author, wordcount, info, text, image_url} = textCover
  const [feature, setFeature] = useState(false)

   const handleClick = () => {
       console.log(feature);
        setFeature(true)}

    return ( 
<div className = "wrapper">
        <div className="card-div">
            <div className="image">
                <img src={image_url} alt={title}/>
            </div>
            < div className="title">
                <h2>{title}</h2>
            </div>
            <div className="button-container">
                <button className="book-button" onClick = {handleClick}></button>
            </div>
            <div>
                {feature ? <Feature  textCover={textCover}/> : null} 
            </div>
        </div>

</div>
    )}



export default Selection;