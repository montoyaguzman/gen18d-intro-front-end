import React from 'react'

const Character = ({character =""}) => {
    const {name, image, species, gender} = character

  return (
    <div className="col-md-4 mb-2">
        <div className="card">
            <img 
            src={image}
            alt={`image-${name}`}
            className="card-img-top"
            ></img>
            <div className="card-body">
                <h3>{name}</h3>
                <p>{species}</p>
                <p>{gender}</p>
            </div>
        </div>
    </div>
  )
}

export default Character