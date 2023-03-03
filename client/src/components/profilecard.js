import React from 'react';

const ProfileCard = ({userItem}) => {
    return ( 
        <div className = "profile-card-div">
        <h1>{userItem.username} </h1>
         <img src={userItem.avatar} style={{ width: '400px', height: '300px' }} alt="User Profile"/>
         <h2>{userItem.name}</h2>
         <h3> {userItem.bio}</h3>
        </div>
     );
}
 
export default ProfileCard;