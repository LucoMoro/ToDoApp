import { useRef } from 'react'
import { useFocus } from '../hook/hooks'

export const InputTextDiv = ({ label, value, onInput }) => {
    const inputRef = useRef();
    const isFocus = useFocus(inputRef);
    return (
        <div
            className={`input ${isFocus && 'focus'}`}
        >
            <label>{label}</label>
            <input
            ref={inputRef}
                type="text"
                onChange={(e) => {
                    onInput(e.target.value);
                }}
                value={value}
                required="required"
            />
        </div>
    );
};
