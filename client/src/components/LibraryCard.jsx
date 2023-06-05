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
            .then(window.location.reload())
        console.log(response)};
      
      
    

    return ( 
        
        <div className="library-container">
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
                <button className="book-button" onClick = {handleClick}> click! </button>
            <div>{feature ? <Feature  textItem={userDoc}/> : null} </div>
                </div>
            </div>
         </div>
        </div>
    
     );
}
 
export default LibraryCard;