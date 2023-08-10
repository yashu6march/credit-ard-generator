import React, {useState} from "react"
import "./Snack.css"

function Snack(prop) {
   // const open = prop.show;
   if( prop.show ){
      return (
         <div id="body">
            <div id="icon">
               <span className="material-symbols-outlined">
                  done
               </span>
            </div>
            <div id="main">
               <h2>GENERATED SUCCESSFULLY!!!</h2>
            </div>
         </div>
      )
   }
}
export default Snack;