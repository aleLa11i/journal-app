 import {useState} from 'react';

export const useForm = (initialState = {}) => {

    const [value, setValue] = useState(initialState);

    const reset = (newState = initialState) => {

        setValue(newState);
    }

    const handleInputChange = ({target})=>{
        setValue({
            ...value,
            [target.name]: target.value,
        });
    }

    return [value,handleInputChange,reset];
}