import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
    let todoList = props.todoList
    return (
        <div className="container">
            {
                todoList.map((element, index) => {
                    return (
                        <Todo name={element} todoEdit={props.todoEdit} todoDelete={props.todoDelete} />
                    )
                })
            }
        </div>
    )
}
