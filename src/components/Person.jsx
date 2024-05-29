import React from 'react'

export const Person = (props) => {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">Id: {props.num}</h5>
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.role}</p>
        </div>
        <div className='mb-4'>
          <button className='btn btn-success me-2' onClick={props.edit}>
            Editar
          </button>
          <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={()=> props.delete(props.num)}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}
