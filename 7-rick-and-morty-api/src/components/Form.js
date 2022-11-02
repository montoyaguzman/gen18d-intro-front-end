import React from 'react'
import Swal from 'sweetalert2';

const Form = ({setName}) => {
    const [inputs, handleChange, reset] = useFrom({name:""});
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
    <div>Form</div>
  )
}

export default Form