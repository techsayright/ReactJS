import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
    return (
        <div className="container">
            {/* hello!! */}
            <h3 className="text-center my-4">Todos List</h3>

            {/* ternary operator */}
            {props.todo.length === 0 ? "No Todos to Display" :

                props.todo.map((curEle) => {
                    return <TodoItem todoss={curEle} key={curEle.sno} onDelete={props.onDelete} />
                })
            }

        </div>
    )
}
