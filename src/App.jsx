import React from "react";
import { useState } from "react";

import "./App.css"

const App = () => {
    const [task, setTask] = useState('');
    const [list, setList] = useState([]);
    

    const handleChange = (e) => {
        setTask(e.target.value);
    }   

    const handleSubmit = (e) => {
        
    
        // e.preventDefault();
        setList([...list,task]);
        console.log(list);
        console.log(task);
        setTask('');
    }
    const handleDelete = (e) => {
        // console.log(e.target.dataset.id);
        setList(list.filter(temp => temp !== e.target.dataset.id))
    }

    return(
        <div>
            <h2>
                To-Do List
            </h2>
            <div id="inputFeild">
                <input value={ task } onChange={ handleChange } placeholder = "Enter your task..." />
                <button onClick={ handleSubmit } >Add</button>
            </div>
            <div id="displayTask">
                {
                    list.map(elem => {
                        return(<>
                            <div>{ elem + " " } <span><button onClick = { handleDelete } data-id = {elem}>Delete</button></span></div>
                        </>)
                    })
                }
            </div>
        </div>
    )
}
export default App;