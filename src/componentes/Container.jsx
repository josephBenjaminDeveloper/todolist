import React from 'react';
import "../styles/Container.css"
import "../styles/boton.css"
import "../styles/H1_container.css"
const ContainerTask = ({user, id, title, completed, cambio})=>{
    return(
        <div className = "classcontainer">
            <b>{id}</b>
          <h1 className="H1_container">{title}</h1>
          <button className={completed ? "true":"false"} 
                onClick={()=>cambio(id)}>
              {completed ? "completas":"incompletas"}</button>
        </div>
    )
}
export default ContainerTask;