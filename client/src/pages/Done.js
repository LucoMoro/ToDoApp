import { useEffect } from "react";

import { deleteTodo, getAllTodos } from "../redux/actions/index";
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from "../redux/actions/type";

import { useDispatch, useSelector } from "react-redux";

import Todo from "../components/Todo";

export default function Done() {
    
    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);
    const currentTab = useSelector(state => state.currentTab);

    useEffect(() => {
        dispatch(getAllTodos());
    }, [])

    const getTodos = () => {
        return todos.filter(todo => todo.done)
    }

    const removeDoneTodos = () => {
        todos.forEach(({ done, _id }) => {
            if(done) {
                dispatch(deleteTodo(_id));
            }
        })
    }

    return (
        <article>
            <div className="tab-container">
                {
                    todos.some(todo => todo.done) ? (
                        <button
                        onClick={removeDoneTodos}
                        className="button clear"
                        > Remove Done Todos </button>
                    ) : null
                }
            </div>
            <ul>
                {
                    getTodos().map(todo => (
                        <Todo 
                            key={todo._id}
                            todo={todo}
                        />
                    ))
                }
            </ul>
        </article>
    )
}