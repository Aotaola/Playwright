 import React from "react";
 import SelectionCard from "./SelectionCard";

const Selection = ({text}) => {

    return (
        <div className="selection-card-container">
            
            {text.map((textItem) => {
                return (
                <SelectionCard textItem={textItem}/>
            )
        })}
        
        </div>

    )}



export default Selection;