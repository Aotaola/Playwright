import React, { useState }from 'react';
import Feature from './feature';



const LibraryCard = ({userDoc}) => {


    const [feature, setFeature] = useState(false)
    console.log(userDoc.id)
    // const userDocs = userDoc

    const handleClick = () => {
        console.log(feature);
         setFeature(!feature)
    }


    const deleteDoc = async () => {
          const response = await fetch(`/user_docs/${userDoc.id}`, {
                        method: 'DELETE',})
        console.log(response)};
      
      
    

    return ( 
        
        <div className="card-container">
             <div className="card" >
                    <div className="card-image"> 
                         <img src={userDoc.image_url} alt={userDoc.title}/>
                     </div>
                    < div className="card-title">
                         <h3>{userDoc.title}</h3>
                     </div>
                    <button className="delete-button" onClick={deleteDoc} >Delete</button>
                         <br></br>
                     <div>
                <button className="book-button" onClick = {handleClick}></button>
            <div>{feature ? <Feature  textItem={userDoc}/> : null} </div>
                </div>
            </div>
            <br></br>
        
         </div>
    
     );
}
 
export default LibraryCard;