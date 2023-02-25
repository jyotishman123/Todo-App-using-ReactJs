import React,{useState,useEffect, useReducer} from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasklist from "./components/Tasklist";
import {db} from "./firebase"
import { updateDoc,  arrayUnion, doc, onSnapshot, setDoc } from 'firebase/firestore';
import TaskReducer from "./TaskReducer";
import { async } from "@firebase/util";

function App() {



    const todoRef = doc(db, 'todo', `todolist`)
 
     
    const initial = []
   
       
    
    
    let post;
   
    // const [todo,setTodo] = useState([])

   const [tasks,dispatch] = useReducer(TaskReducer,initial)

   useEffect(()=>{
 
    onSnapshot(doc(db, 'todo', `todolist`), (doc) => {
      let data = doc.data().task;
      
      // console.log(data)
   
      dispatch({
        type:"add",
        task: data
      })

    
     
    });
   
  
 
   },[])
   
  
 
   setDoc(doc(db, "todo", "todolist"), {
    task: tasks
 });
 
 
 console.log(tasks)
 
  
async function handleAdd(text,setText){
  dispatch({
    type:'onAdd',
     id: tasks.length + 1,
     task:text 
  })
 
  

  setText("")
  
 
 }

 function handleChange(text,id){
  dispatch({
    type:'change',
    task:text,
    id:id
  })
  
 }

 function handledelete(id){

    dispatch({
      type:'delete',
      id:id
    })
    // console.log(id)
     
 }
 
 
 
    
  return (
    <>
    <Header/>
    <AddTask onAdd={handleAdd}/>

    {tasks.map((ele,index)=>{
     return  <Tasklist key={index} tasks = {ele} id={ele.id} onChanged={handleChange} ondelete={handledelete}/>
    })}
    
     
    
    
    
    </>
  );

  }

let nextid = 1

export default App;
