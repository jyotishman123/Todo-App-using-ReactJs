import React from 'react'
import { useState } from 'react'

export default function Tasklist({tasks , onChanged,id,ondelete}) {
  const [edit,setEdit] = useState(false);
  const [text,setText] = useState()
  
  let taskContent;
  if(edit){
    taskContent = (<div className='flex'>
       <input type='text' onChange={(e)=> setText(e.target.value)} className="border-2 py-2 px-4"/>
       <button  className='mx-6' 
       onClick={()=>{setEdit(false);

       onChanged(text,id)}}>
        done
        </button>
    </div>)
  }else{
    taskContent=(
  <div className='flex'> 
  
    {tasks.task}
    <button  className=' mx-6 bg-yellow-400 py-2 px-6 rounded-md font-bold'  onClick={()=>setEdit(true)}>Edit</button> 
  </div>
    )
  }



  return (
    <>
    <div className='m-auto flex w-[65%] border-2 justify-between py-3 px-5 my-3'>
        <h2 className='ml-5 text-2xl'>{taskContent}</h2>
        <div> 
        {/* <button className='mx-6 bg-yellow-400 py-2 px-6 rounded-md font-bold'>Edit</button> */}
        {/* {taskContent} */}
        <button className='mx-6  bg-red-600 py-2 px-6 rounded-md text-white font-bold' onClick={()=>ondelete(id)}>Delete</button>
</div>
    </div>
    </>
  )
}
