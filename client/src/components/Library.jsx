import React from "react";
import LibraryCard from "./LibraryCard";

const Library = ({userDocument}) => {
console.log(userDocument)
    return ( 
        <div>
            <h1>
                
            here I want to see my documents
            
            </h1>
            <div>
            {userDocument.docs.map((userDoc) => {
            return (
            <div> 
            <LibraryCard key={userDoc.id} userDoc={userDoc}/>
            </div>
                    )
            })} 
         </div>

        </div>
     );
}
 
export default Library;