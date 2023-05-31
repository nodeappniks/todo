import React from 'react'

export default function Todo(props) {
    const handleDelete = (name) => {
        props.todoDelete(name)
    }

    const handleEdit = (name) => {
        props.todoEdit(name)
    }
    return (
        <div className="todo" >
            <button onClick={() => handleEdit(props.name)}>Edit</button>&nbsp;&nbsp;{props.name} <button onClick={() => handleDelete(props.name)}>Delete</button>
        </div>
    )
}
