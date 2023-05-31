import { useState } from 'react'
import TodoList from './TodoList'

export default function AddTodo() {
    const [todoName, setTodoName] = useState("")
    const [editableTodoName, setEditableTodoName] = useState("")
    const [todoList, setTodoList] = useState([])
    const [mode, setMode] = useState("create")

    // add item in todo list
    const handleCreateTodo = () => {
        setTodoList((prev) => {
            return [...prev, todoName]
        })
        setTodoName("")
    }

    // to delete value from todo list
    const todoDelete = (name) => {
        setTodoList((prev) => {
            let newTodo = prev.filter((element) => {
                return element !== name
            })
            return newTodo
        })
    }

    //to change from create mode to update mode
    const todoEdit = (name) => {
        setMode("update")
        setTodoName(name)
        setEditableTodoName(name)
    }

    //to update list
    const handleUpdateTodo = () => {
        setTodoList((prev) => {
            let newTodo = prev.map((element) => {
                if (element === editableTodoName) {
                    element = todoName
                }
                return element
            })
            return newTodo
        })
        setTodoName("")
    }



    return (
        <div>
            <input type="text" value={todoName} onChange={(e) => { setTodoName(e.target.value) }} />
            {/* <button onClick={handleCreateTodo}>Create to do</button> */}
            {
                mode === "create" ? (<button onClick={handleCreateTodo}>Create to do</button>) : (
                    <button onClick={() => handleUpdateTodo()}>Update to do</button>
                )
            }

            <TodoList todoList={todoList} todoDelete={todoDelete} todoEdit={todoEdit} />
        </div>
    )
}
