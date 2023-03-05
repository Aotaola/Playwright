import React from "react";
import Selection from "./selection";



const Home = ({text}) => {
    
        
    return ( 
        <div className = "selection-wrapper">
        <div>   
        <Selection  text={text}/>
        </div>
        </div>
     );
}
 
export default Home;