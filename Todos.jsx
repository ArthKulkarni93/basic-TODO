export function Todos({t}){
    return(
        <>
            {
                t.map((todos)=>
                    
                    <div key={todos._id}>
                        <h3>{todos.title}</h3>
                        <h5>{todos.description}</h5>
                        <h5>{todos.completed}</h5>
                        <button onClick={()=>{
                            
                        }}>mark as completed</button>
                    </div>
                    

                )
            }
        </>
    )
}