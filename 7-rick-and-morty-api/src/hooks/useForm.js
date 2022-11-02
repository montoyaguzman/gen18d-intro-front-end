import { useState } from "react"

export const useForm = (initialState ={}) => {
    const [inputs, setInputs] = useState(initialState);

    const handleChange = (e) => {
        const {name, value, checked, type} = e.target;

        setInputs((old)=> ({
            ...old,
            [name]: type === "checkbox" ? checked: value,
        }));
    };

    const reset = () =>{
        setInputs(initialState);
    }

    return [inputs, handleChange, reset]
}
