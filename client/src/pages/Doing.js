import { useEffect } from "react";

import { getAllTodos } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

// component

import Todo from "../components/Todo";

export default function Doing() {
    
    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);
    const currentTab = useSelector(state => state.currentTab);

    useEffect(() => {
        dispatch(getAllTodos());
    }, [])

    const getTodos = () => {
        return todos.filter(todo => !todo.done)
    }

    return (
        <article>
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