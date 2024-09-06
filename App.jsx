import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';
import axios from 'axios';

function App() {
  const [todos,settodos] = useState([]);
  
  const get = async() => {
    const response = await axios.get("http://localhost:3000/todos")
    settodos(response.data.todos)
  }

  if(todos.length===0) get()
  return (
    <>
      <CreateTodo/>
      <Todos t={todos}>
      </Todos>
    </>
  )
}

export default App
