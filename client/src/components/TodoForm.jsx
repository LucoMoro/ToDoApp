import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { AddNewTodo } from '../redux/actions';

const TodoForm = () => {

    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(AddNewTodo());
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input 
            placeholder="Enter new todo..."
            className="input_test"
            onChange={onInputChange}
            />
        </form>
    )
}

export default TodoForm;