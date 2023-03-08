import React from "react";
import LibraryCard from "./LibraryCard";

const Library = ({userDocuments}) => {
    console.log(userDocuments)

    const cards = userDocuments.map((userDoc) => {
            return <LibraryCard key={userDoc.id} userDoc={userDoc}/> 
        }
    ) 

    return ( 
        <div>
            <h1>
                
            here I want to see my documents
            
            </h1>
            <div> 
                {cards}
         </div>

        </div>
     );
}
 
export default Library;