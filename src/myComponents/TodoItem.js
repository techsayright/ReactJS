import React from 'react'


export const TodoItem = ({todoss, onDelete}) => {
    return (
        <>
        <div>
            <h4><strong>Title:</strong> {todoss.title}</h4>
            <p><strong>Desc:</strong> {todoss.desc}</p>
            <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todoss)}}>Delete</button> {/**i have passed here arrow fun at place of onclick coz when we passed fun() like that it rendering at execution time */}
            <hr />
        </div> <br />
        </>
    )
}

