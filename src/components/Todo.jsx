import {useEffect, useState} from "react";

const Todo = (props) => {
    const [completed,setCompleted] = useState(props.info.completed)


    return (
        <div onClick={()=>setCompleted(!completed)} style={{padding: 20,margin:10, border: 'solid 1px gray', display: 'flex', flexDirection: 'column', borderRadius: 10}}>
            <div> ID : {props.info.id}</div>
            <div>Title : {props.info.title}</div>
            <div>
                complete : {completed ? 'انجام شده' : 'انجام نشده'}
            </div>
        </div>
    )
}


export default Todo