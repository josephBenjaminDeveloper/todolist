import React from 'react';
import'../styles/header.css';
import'../styles/botonHeader.css'
const Header = ({todas, completas, incompletas})=>{
    return(
        <div className = "header"> 
            <h1>todo list</h1>
            <button onClick={()=>todas(null)}className="botonHeader">todas</button>
            <button  onClick={()=>completas(true)}className="botonHeader">completas</button>
            <button  onClick={()=>incompletas(false)}className="botonHeader">incompletas</button>  
        </div>
    )
}
export default Header;