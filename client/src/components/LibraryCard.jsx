import React from 'react';
import DeleteBtn from './deleteBtn';


const LibraryCard = ({userDoc}) => {


    // const deleteDoc = async (id) => {
    //       const response = await fetch(`/user_docs/${id}`, {
    //                     method: 'DELETE',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         }
    //      })};
      
    //       if (response.ok) {
    //         const data = await response.json();
    //         console.log(data);
    //       } else {
    //         const errorData = await response.json();
    //         console.log(errorData.error);
    //       }
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };

    return ( 
        <div className = "wrapper">
        <div className="card-div">
            <div className="image">
            <img src={userDoc.image_url} alt={userDoc.title}/>
            </div>
            < div className="title">
            <h3>{userDoc.title}</h3>
           </div>
           <DeleteBtn/>
        </div>
   </div>
     );
}
 
export default LibraryCard;