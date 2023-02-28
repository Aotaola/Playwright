import React from "react";
import { useEffect, useState } from "react";
const Feature = () => {
    const [bookCover, setBookCover] = useState("");
    const renderBook = async() => {
        let req = await fetch("/docs/1")
        let res = await req.json()
        console.log(res)
        setBookCover(res)}

        useEffect(()=>{
            renderBook()
        },[]) 
    
    return ( 
        <div style={{margin: '20px'}}>

            <label className="floating-label">{bookCover.title}</label>
            <br/>
          <textarea 
            type="text" 
            placeholder= {bookCover.text} 
            cols="50"

            name="main feat"
            style={{width: '50%', height: '60px', fontSize: '14px', padding: '0',
             height: '200px',
              border: '1px solid black', borderRadius: '5px',
               textAlign: 'justify'}}
          />
          <br/>

          <label className="floating-label">{bookCover.author}</label>
          
          <br/>
          
          <label className="floating-label">{bookCover.info}</label>

          
        </div>
      );
      
}
 
export default Feature;