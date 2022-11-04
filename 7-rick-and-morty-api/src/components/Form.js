import React from 'react'
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
        <Stack direction="row" spacing={3}>
            <TextField 
            id="outlined-basic"
            label="Enter a character name" 
            variant="outlined"
            value={name}
            onChange={handleChange}
            name="name"/>

            <Button variant="contained"type="submit">Search</Button>
        </Stack>
    </form>
  )
}

export default Form