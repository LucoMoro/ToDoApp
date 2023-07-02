import { toggleTodo } from "../redux/actions";

import { useDispatch } from 'react-redux';

const Todo = ({ todo }) => {

    const dispatch = useDispatch();

    return (
        <li
            className="task"
            onClick={() => dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo.done ? 'line-through' : '',
                color: todo.done ? '#bdc3c7' : '#34495e'
            }}
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