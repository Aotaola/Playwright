import React from "react";
// import { useState } from "react";

const Feature = ({textCover}) => {
  console.log(textCover)

  const {title, author, wordcount, info, text, image_url} = textCover
    
    return ( 
        <div style={{margin: '20px'}}>
            <label className="floating-label">{title}</label>
            <br/>
          <input 
            type="text" 
            placeholder= {text} 
            // onChange={ handleChange }
            // value={inputValue}
            cols="50"

            name="main feat"
            style={{width: '50%', fontSize: '14px', padding: '5px',
             height: '20px',
              border: '2px solid black', borderRadius: '5px',
               textAlign: 'justify'}}
          />
          {/* I need my placeholder text to remain while I type over it.  */}
          <br/>
          <div>
          <img src={image_url} style={{width: '100%', height: '1'}} alt = {title} />


          <label className="floating-label">{author}</label>
          
          <br/>
          
          <label className="floating-label">{info}</label>
          <label className="floating-label">{wordcount}</label>
          </div>

          
        </div>
      );
      
}

 
export default Feature;