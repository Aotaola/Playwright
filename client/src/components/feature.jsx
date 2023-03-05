import React, { useState } from "react";

const Feature = ({textItem}) => {
  const [text, setText] = useState(textItem.text);
  const [input, setInput] = useState("");
  const [inputColor, setInputColor] = useState("blue");

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
      setInputColor("blue");
    } else {
      setInputColor("red");
    }
  }

  return (
    <div>
      <h3>test</h3>
      <body>
        <p >{text}</p>
        <textarea
          type="text"
          value={input}
          style={{ color: inputColor }}
          placeholder={text}
          onChange={handleInputChange}
        />
      </body>
    </div>
  );
};

export default Feature;