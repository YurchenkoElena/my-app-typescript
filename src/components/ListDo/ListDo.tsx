import React, {useEffect, useState} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActionsDispatch} from "../../hooks/useActions";
import './ListDo.css'

const ListDo: React.FC = () => {
    const {todos, isLoading, error, page, limit, total} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodosPage, fetchAllTodos} = useActionsDispatch()


    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    useEffect(() => {
        fetchAllTodos();
    }, [])


    const totalPages = total / limit
    const pages = Array.from({length: totalPages}, (_, i) => i + 1)

    /*if (isLoading) {
        return (
            <div className={'loading'}>'Loading...'</div>
        )
    }
    if (error) {
        return (
            <div>{error}</div>
        )
    }*/



    return (<>
            <div className={'pagination'}>
                {pages.map(p =>
                        <span key={p} className={'pagination-page'}
                              style={{border: p === page ? '2px solid red' : '2px solid green'}}
                              onClick={() => setTodosPage(p)}>{p}
                </span>
                )}
            </div>

            <div className={'todoss'}>
                {todos.map(todo =>
                    <div key={todo.id} className={'to-dos'}>
                        <div>{todo.id} --- {todo.title}</div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ListDo