import React, { useState } from 'react';

export const Addtodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const addingTodos=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("All inputs are Required!!");
        }
        else{
            props.pushTodos(title, desc);
            setTitle("")
            setDesc("")
        }
    }

    let addTodoStyle = {
        width: "80%",
        // display: "flex",
        // flexDirection:"row"
    }
    
    return (
        <div style={addTodoStyle} className="container my-3">
            <h3>Add Todo:</h3>
            <form onSubmit= {addingTodos}>
                <div style={addTodoStyle}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Todo Title</label>
                        <input type="text" value= {title} className="form-control" id="title" onChange={(e)=>{setTitle(e.target.value)}} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Desc" className="form-label">Desc</label>
                        <input type="text" value={desc} className="form-control" id="Desc" onChange={(e)=>{setDesc(e.target.value)}}/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-sm">Add Todo</button>
                </div>
            </form>
        </div>
    )
}
