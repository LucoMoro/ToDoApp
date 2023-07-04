import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../redux/actions';
import { InputTextDiv } from './ui-kit/InputTextDiv'

const TodoForm = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState('');
    const onReset = () => {
        setText('');
    };
    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));
        onReset();
    }

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}
        >
            <InputTextDiv
                label="Enter new todo"
                value={text}
                onInput={setText}
            />
        </form>
    )
}

export default TodoForm;