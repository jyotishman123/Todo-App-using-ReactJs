import {db} from "./firebase"
import { setDoc ,doc,updateDoc} from "firebase/firestore" 

const todoRef = doc(db, 'todo', `todolist`)

export default function TaskReducer(tasks,action) {
     switch(action.type){
        case 'add':{
             
         
            tasks = action.task
        
        
            return  tasks
        }

        case 'onAdd':{

               setDoc(doc(db, "todo", "todolist"), {
    task: [...tasks,{id:action.id, task:action.task}]
 });

            return [...tasks,{id:action.id, task:action.task}]
        }

        case 'change':{
            
              tasks.map((ele)=>{
                if(ele.id == action.id){
                ele.task = action.task
                 return ele
                }
              })
            
             updateDoc(todoRef, {
                task: tasks
              });
              return tasks
        }
       

        case 'delete':{
              tasks = tasks.filter((e)=> e.id != action.id)

             updateDoc(todoRef, {
               task: tasks
             });
             
             return tasks
             
            
        }

     }
}
