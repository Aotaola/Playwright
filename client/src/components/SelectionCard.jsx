import Feature from "./feature";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SelectionCard = ({textItem}) => {

    const navigate = useNavigate();
    const [feature, setFeature] = useState(false)
    //console.log(textItem)

    const saveDoc = async () => {
        const response = await fetch("/user_docs",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "doc_id": textItem.id,

        })
    })
    if (response.ok) {
        response.json().then(data => {
            console.log(data)
        })
      } else {
        response.json().then(data => {
            console.log(data.error)
        })
    }}

    const deleteDoc = async () => {
        try {
          const response = await fetch("/user_docs/", {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log(data);
          } else {
            const errorData = await response.json();
            console.log(errorData.error);
          }
        } catch (error) {
          console.error(error);
        }
      };
      
      

// const handleSave = () => {
//     saveDoc();
// }
   
       
    const handleClick = () => {
        console.log(feature);
         setFeature(!feature)
    }

    return (
        <div className = "wrapper">
             <div className="card-div">
                 <div className="image">
                     <img src={textItem.image_url} alt={textItem.title}/>
                 </div>
                 < div className="title">
                        <h3>{textItem.title}</h3>
                </div>
                        <button className="save-button"  onClick={() => saveDoc()}>SAVE</button>
                        <button className="save-button" onClick={() => deleteDoc()}>Delete</button>
                 <div className="button-container">
                        <button className="book-button" onClick = {handleClick}></button>
                    </div>
                    <div>
                        {feature ? <Feature  textItem={textItem}/> : null} 
                    </div>
             </div>
             
        </div>
    )
}

export default SelectionCard;