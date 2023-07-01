import { toggleTodo } from "../redux/actions";

import { useDispatch } from 'react-redux';

const Todo = ({ todo }) => {

    const dispatch = useDispatch();

    return (
        <li
            className="task"
            onClick={() => dispatch(toggleTodo(todo._id))}
        >
            <span>{todo.data}</span>

            <span className="icon">
                <i className="fas fa-trash"/>
            </span>
            <span className="icon">
                <i className="fas fa-pen"/>
            </span>
        </li>
    )
}

export default Todo;