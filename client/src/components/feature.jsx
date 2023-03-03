import React from "react";
// import { useState } from "react";

const Feature = ({textItem}) => {
  console.log(textItem)

  // const createText = async () => {
  //   const req = await fetch("/docs",{
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //         "title": title,
  //         "author": author,
  //         "wordcount": wordcount,
  //         "info": info,
  //         "text": text,
  //         "image_url": image_url
  //     })
  // })

  
    
    return ( 
        <div style={{margin: '20px'}}>
            <label className="floating-label">{textItem.title}</label>
            <br/>
          <input 
            type="text" 
            placeholder= {textItem.text} 
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
          <img src={textItem.image_url} style={{width: '100%', height: '1'}} alt = {textItem.title} />


          <label className="floating-label">{textItem.author}</label>
          
          <br/>
          
          <label className="floating-label">{textItem.info}</label>
          <label className="floating-label">{textItem.wordcount}</label>
          </div>


          {/* <button className = "create-btn" onClick={createText}>Publish</button> */}
        </div>
      );
      
}
// }

 
export default Feature;