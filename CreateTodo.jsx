import { useState } from "react"
import axios from "axios";

export function CreateTodo(){
    const [title,setTitle] = useState('');
    const [description,setDesc] = useState('');

    return (
        <>
            <input type="text" name="" 
            id="" placeholder='enter title of todo'
            onChange={(e)=>setTitle(e.target.value)
            }
            />

            <input type="text" name="" 
            id="" placeholder='enter desc of todo'
            onChange={(e)=>setDesc(e.target.value)
            }
            />
    
            <button onClick={async()=>{
                await axios.post("http://localhost:3000/todo",{title,description})
                alert("todo added")

            }}>create todo</button>
        </>
    )
}