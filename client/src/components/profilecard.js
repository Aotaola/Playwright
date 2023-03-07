import React from 'react';

const ProfileCard = ({user}) => {
    
    //console.log(user)


    return ( 
        <div className = "profile-card-div">
        <h1>{user?.username} </h1>
         <img src={user?.avatar} style={{ width: '400px', height: '300px' }} alt="User Profile"/>
         <h2>{user?.name}</h2>
         <h3> {user?.bio}</h3>
         <p>{user?.saved}</p>
        </div>
     );
}
 
export default ProfileCard;