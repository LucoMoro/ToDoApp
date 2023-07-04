import { useState, useEffect, useMemo } from "react";
import { toggleTodo, updateTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";
import { useDispatch } from 'react-redux';

const Todo = ({ todo }) => {
    const dispatch = useDispatch();

    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo.data);
    useEffect(() => {
        setText(todo.data);
    }, [todo.data]);
    const todoTextLower = useMemo(() => todo.data.toLowerCase(), [todo.data]);
    const goal = todo.data.split(':');

    const toggleTodoDone = () => {
        dispatch(toggleTodo(todo._id));
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (editing) {
            setEditing(false);
            dispatch(updateTodo(todo._id, text));
            if (todo.done) {
                toggleTodoDone();
            }
        }
    }

    return (
        <li
            className="task"
            onClick={toggleTodoDone}
            style={{
                textDecoration: todo.done ? 'line-through' : '',
                color: todo.done ? '#bdc3c7' : '#34495e'
            }}
        >
            <span style={{ display: editing ? 'none' : '' }}>
                <TodoIcon
                todoTextLower={todoTextLower}
                />
                <span></span> {goal[0]} <br /> {goal[1]}
            </span>

            <form
                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
            </form>
            <span className="icon"
                style={{ color: todo.done ? '#008F39' : '#FFFFFF' }}
            >
                <i class="fas fa-check-circle"></i>
            </span>

            <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
                <i className="fas fa-trash" />
            </span>
            <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
                <i className="fas fa-pen" />
            </span>
        </li>
    )
}

const TodoIcon = ({ todoTextLower }) => {
    if (todoTextLower.includes('download')) {
        
        return <i class="fas fa-file-download" />;
    } else if (
        todoTextLower.includes('code')
        || todoTextLower.includes('method')
        || todoTextLower.includes('class')
    ) {
        return <i class="fas fa-code" />;
    } else if (
        todoTextLower.includes('branch')
        || todoTextLower.includes('github')
    ) {
        return <i class="fas fa-code-branch" />;
    } else {
        return <i />;
    }
}

export default Todo;