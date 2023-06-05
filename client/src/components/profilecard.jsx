import React from 'react';

const ProfileCard = ({user}) => {
    
    return ( 
      <div >
  <h1 className="uppercase">{user?.username}</h1>
  <div className="profile-card">
    <h2 className="profile-bio">{user?.name}</h2>
    <div className="card-image">
      <img src={user?.avatar} alt="User Profile"/>
    </div>
    <h3 className="profile-bio">{user?.bio}</h3>
  </div>
</div>
     );
}
 
export default ProfileCard;