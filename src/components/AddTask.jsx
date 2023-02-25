import React,{useState} from 'react'

export default function AddTask({onAdd}) {
    const [text,setText] = useState()
  return (
    <div className='text-center py-6'>
        <input type='text' placeholder="Enter Your Task" className='border-2 py-2 px-2 w-[40%]' value={text} onChange={(e)=>setText(e.target.value)}/>
        <button className='mx-5 bg-blue-700 py-2 px-6 rounded-md text-white' 
        onClick={(e)=>
          
            onAdd(text,setText)
          
          }
          >Add</button>
    </div>
  )
}
