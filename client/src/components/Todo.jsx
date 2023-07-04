import { useState, useMemo } from "react";

import { toggleTodo, updateTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";

import { useDispatch } from 'react-redux';

const Todo = ({ todo }) => {

    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo.data);
    const textLower =  useMemo(() => todo.data.toLowerCase(), [todo.data]);

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditing(prevState => !prevState);

        dispatch(updateTodo(todo._id, text))
    }

    const goal = todo.data.split(':');

    return (
        <li
            className="task"
            onClick={() => dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo.done ? 'line-through' : '',
                color: todo.done ? '#bdc3c7' : '#34495e'
            }}
        >   
        <span style ={{ display: editing ? 'none' : '' }}>
            {(() => {
                    if (textLower.includes('download')) {
                        return <i class="fas fa-file-download"/>;
                    } else if (textLower.includes('code') || textLower.includes('method') || textLower.includes('class')) {
                        return <i class="fas fa-code"/>;
                    } else if (textLower.includes('branch') || textLower.includes('github')) {
                        return <i class="fas fa-code-branch"/>;
                    } else {
                        return <i/>;
                    }
                })()}
            <span></span> {goal[0]} <br/> {goal[1]}
        </span>

            <form
                style= {{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input 
                    type = "text" 
                    value={text}
                    className = "edit-todo"
                    onChange={(e) => {
                        setText(e.target.value);
                    }} 
                />
            </form>
            <span className="icon" 
                style={{color: todo.done ? '#008F39' : '#FFFFFF'}}
            >
                   <i class="fas fa-check-circle"></i>
            </span>
            
            <span className="icon" onClick = {() => dispatch(deleteTodo(todo._id))}>
                <i className="fas fa-trash"/>
            </span>
            <span className="icon" onClick = {() => setEditing(prevState => !prevState)}>
                <i className="fas fa-pen"/>
            </span>
        </li>
    )
}

export default Todo;