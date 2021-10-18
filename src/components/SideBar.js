import React from 'react';
import './myStyle.css'




function SideBar()
{
    console.log("Hello world!");
    return(
        <div className='leftSideDiv' style={{ }}>
            <button onClick={()=>{
                <h1>This is Objectives</h1>
                console.log("Hello Objectives")

            }}>Objectives</button>

            <button onClick={()=>{
                <h1>This is Subjectives</h1>

            }}>Subjectives</button>
            
        </div>
    )    

}
export default SideBar;
