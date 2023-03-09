import React from 'react';

const ProfileCard = ({user}) => {
    
    return ( 
        <div >
         <h1 className="uppercase" >{user?.username} </h1>
            <div className="profile-card">
         <h2 className="profile-bio" style={{ width: "50%" }}>  {user?.name}</h2>
            <div className="card-image"  >
         <img src={user?.avatar} style={{ width: '400px', height: '300px'}} alt="User Profile"/>
            </div>
         {/* <div style={{ width: "50%" }}> */}
         {/* </div> */}
         <h3 className="profile-bio" style={{ width: "50%" }}> {user?.bio}</h3>
            </div>
        </div>
     );
}
 
export default ProfileCard;