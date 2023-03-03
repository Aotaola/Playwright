import Feature from "./feature";
import { useState } from "react";
const SelectionCard = ({textItem}) => {

    const [feature, setFeature] = useState(false)
    const handleClick = () => {
        console.log(feature);
         setFeature(true)
     }
 
    return (
        <div className = "wrapper">
             <div className="card-div">
                 <div className="image">
                     <img src={textItem.image_url} alt={textItem.title}/>
                 </div>
                 < div className="title">
                        <h2>{textItem.title}</h2>
                </div>
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

export default SelectionCard