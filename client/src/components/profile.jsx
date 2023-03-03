import React from "react";
import Selection from "./selection";
// import NavBar from "./navBar";
import ProfileCard from "./profilecard";
//import { useEffect, useState } from "react";

const Profile = ({user, text}) => {
         

      
    return ( 
         <div>
          {/* <NavBar/> */}
         <br></br>
         <div className="profile-card-container">{
        (user.map((userItem) => {
            return (<ProfileCard key={userItem.id} userItem={userItem} />)
        }))}
        </div>
         <br/>
         <h4>library</h4>
         <br></br>
         <Selection text={text} style={{ display: "inline-block" }}/>
        </div>
     );
}
 
export default Profile;