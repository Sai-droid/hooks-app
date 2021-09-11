import React from 'react'
import '.././App.css';

function nameTag(props) {

    if(!props.firstname && !props.lastname){
        return(
            <div className ="name">
        <h3 >Invalid</h3>
      
        </div>
        )
    }

   return(
       <div className ="name">
   <h3 >{props.firstname}</h3>
   <h3 >{props.lastname}</h3>
   {
       props.firstname ==="john" && <div style={{color:"green"}}>VIP</div>
   }
   </div>
   )
}

export default nameTag
