 import React from "react";
 import SelectionCard from "./SelectionCard";

const Selection = ({text}) => {

    return (
        <div className="selection-card-container">
            {text.map((textItem) => {
            return (
            <div> 
            <SelectionCard textItem={textItem}/>
                </div>
            )
        })}
        </div>

    )}



export default Selection;