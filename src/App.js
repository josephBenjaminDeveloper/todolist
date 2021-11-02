import Header from "./componentes/Header";
import ContainerTask from "./componentes/Container";
import React,{ useEffect,useState } from "react";
import "../src/styles/app.css"




function App() {
  const [taskTodolist,setTaskTodolist] = useState(null)
  const [datafilter,setDatafilter] = useState(null)
  useEffect(()=>{

  const funcionfetch=async()=>{
  const response =await fetch("https://jsonplaceholder.typicode.com/todos")
  const result =await response.json()  
  const result20 = result.slice(0,20);
  setTaskTodolist(result20);
  }
  funcionfetch();
  },[])


  const todas = (joseph)=>{
    setDatafilter(taskTodolist)
    console.log(joseph)
  }
   const completas = (completas)=>{
  setDatafilter(taskTodolist.filter((x)=>x.completed === completas ))

     console.log(completas)
   }

   const incompletas = (incompletas)=>{
     setDatafilter(taskTodolist.filter((x)=>x.completed === incompletas)) 
     console.log(incompletas)
   }


 // console.log(taskTodolist[0])
  const cambioboton = (id)=>{
  setTaskTodolist(taskTodolist.map((x)=>x.id === id ? {...x,completed: !x.completed}:x))

  setDatafilter(datafilter.map((x)=>x.id === id ? {...x,completed: !x.completed}:x))
  }
  
  return(
  <div className="all"> 
    <Header
      todas = {todas}
      completas = {completas}
      incompletas = {incompletas}
    />
    <div className="contenedor">
    {datafilter && datafilter.map((x)=>
    <ContainerTask
    key = {x.id} 
    user = {x.userId}
    id = {x.id}
    title = {x.title}
    completed = {x.completed}
    cambio = {cambioboton}
    />
    )}
    </div>
  </div>
)
}

export default App;
