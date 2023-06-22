import React, {useEffect, useState} from "react";

import "./assets/variables.css"
import "./assets/global.scss"
import Todo from "./components/Todo";
import axios from "axios";
function App() {
    const [todoList,setTodoList] = useState([])
    const [switcher,setSwitcher] = useState(false)

    const getTodos = async ()=>{
      const res = await axios('https://jsonplaceholder.typicode.com/todos')
        console.log({res})
        setTodoList(res.data)
      // setTodoList(data)
    }

    useEffect(()=>{
        console.log({switcher})
        getTodos()
    },[])



    return (
        <div>
            <button onClick={()=>setSwitcher(!switcher)}>retry</button>
            {
                todoList.map(item=>{
                    return <Todo info={item} />
                })
            }
        </div>
    )
}

export default App
