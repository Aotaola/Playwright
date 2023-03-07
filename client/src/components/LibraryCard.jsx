import React from 'react';

const LibraryCard = ({userDoc}) => {
    console.log(userDoc);

    return ( 
        <div className = "wrapper">
        <div className="card-div">
            <div className="image">
                <img src={userDoc.image_url} alt={userDoc.title}/>
            </div>
            < div className="title">
                   <h3>{userDoc.title}</h3>
           </div>
        </div>
   </div>
     );
}
 
export default LibraryCard;