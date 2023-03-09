import React from 'react';

const DeleteBtn = ({saved}) => {
    

    console.log(saved)

    
    
    const deleteDoc = async (id) => {
        const response = await fetch(`/user_docs/${id}`, {
                      method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
       })};
    
    return (  
        <div className="button-container">     
             <button className="save-button" onClick={deleteDoc()}>Delete</button>
        </div>
    );
}
 
export default DeleteBtn;