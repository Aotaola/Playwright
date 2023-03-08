import Feature from "./feature";
import { useState } from "react";
import DeleteBtn from "./deleteBtn";


const SelectionCard = ({textItem}) => {

   
    const [feature, setFeature] = useState(false)
    const [saved, setSaved] = useState([])
    

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
            setSaved(data.id)
            console.log(data.id)
        })
      } else {
        response.json().then(data => {
            console.log(data.error)
        })
    }}
    

  console.log(saved)
      

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
                        <DeleteBtn saved={saved}/>
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