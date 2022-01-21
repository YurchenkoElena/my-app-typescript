import React from "react";
import {TodoList} from "../components/TodoList/TodoList";
import {TodoForm} from "../components/TodoList/TodoForm";
import {ITodoType} from "../types/interfaces";

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = React.useState<ITodoType[]>([]);

    React.useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodoType[]
        setTodos(saved)
    }, [])

    React.useEffect(() => {
        localStorage.setItem('todos',  JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodoType = {
            title: title,
            id: Date.now(),
            completed: false
        }
        setTodos(prev => [newTodo, ...prev])
        //setTodos([newTodo, ...todos])
    }

    const toggleHandler = (id: number) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                console.log(todo)
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    const removeHandler = (id: number) => {
        // eslint-disable-next-line no-restricted-globals
        const shouldRemove = confirm('Вы уверены, что хотите удалить задачу?')
        if(shouldRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    }

    return (
        <>
            <TodoForm onAdd={addHandler}/>
            <TodoList todos={todos}
                      onToggle={toggleHandler}
                      onRemove={removeHandler}/>
        </>


    )
}