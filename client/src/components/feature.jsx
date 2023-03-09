import React, { useState } from "react";

const Feature = ({textItem}) => {
  console.log(textItem);
  const [text, setText] = useState(textItem.text);
  const [input, setInput] = useState("");
  const [inputColor, setInputColor] = useState("black");
  
  

  function handleInputChange(event) {
    const { value } = event.target;
    const inputChars = value.split("");
    let inputIsValid = true;

    for (let i = 0; i < inputChars.length; i++) {
      if (inputChars[i] !== text[i]) {
        inputIsValid = false;
        break;
      }
    }

    if (inputIsValid) {
      setInput(value);
      setInputColor("white");
    } else {
      setInputColor("purple");
    }
  }
  return (
    <div>
      <h3></h3>
      <body className="feature-body" 
      onChange={handleInputChange} >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4 style={{ width: "50%"}} className="feature-h4">{text}</h4>
        <br></br>
        <textarea className="textarea"
          type="text"
          value={input}
          style={{ borderColor: inputColor, color: inputColor, width: "50%" }}
          placeholder={text}
          onChange={handleInputChange}
          rows="10"/>
          </div>
      </body >
      <p className="feature-info">{textItem.author}</p><p className="feature-info">{textItem.info}</p>
    </div>
  );
};

export default Feature;