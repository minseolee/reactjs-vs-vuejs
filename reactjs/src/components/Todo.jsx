import {useEffect, useState} from "react";
import S from './Todo.module.css';

const Todo = ({ name }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
        setIsChecked((prev) => !prev);
    }

    useEffect(() => {
        if (isChecked) alert('Checked!');
    }, [isChecked]);

    return (
        <li
            className={isChecked && S['line-through']}
        >
            <input
                type={'checkbox'}
                checked={isChecked}
                onInput={handleCheck}
            />
            {name}
        </li>
    )
}

export default Todo;
