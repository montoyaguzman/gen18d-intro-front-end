import React from 'react'
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';

const Form = ({setName}) => {
    const [inputs, handleChange, reset] = useForm({name:""});
    const {name}=inputs

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (!name.trim()) {
            return Swal.fire({
                title: "Error!",
                text: "Instert a Name",
                icon: "error"
            });
        }
        setName(name.trim().toLowerCase());

        reset()
    }
  return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={name}
        onChange={handleChange}
        className="form-control mb-2"
        name="name"
        placeholder="Enter a character name">
        </input>
        <button className="btn btn-info" type="submit">
            Search
        </button>
    </form>
  )
}

export default Form