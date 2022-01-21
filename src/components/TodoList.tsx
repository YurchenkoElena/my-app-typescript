import React from "react";
import {ITodoType} from "../types/interfaces";

type TodoListProps = {
    todos: ITodoType[]
    onToggle(id: number): void
    onRemove: (ig: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onRemove, onToggle}) => {
    if(todos.length === 0) {
        return <h3 className="center">Список дел пуст!</h3>
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }

    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if(todo.completed) {
                    classes.push('completed')
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type="checkbox"
                                   checked={todo.completed}
                                   onChange={onToggle.bind(null, todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i className="material-icons red-text"
                               onClick={event => removeHandler(event, todo.id)}
                            >
                                content_cut
                            </i>
                        </label>
                    </li>
                )
            } )}
        </ul>
    )
}