import React, { useState } from 'react'
import { Person } from './Person';

export const Persons = ({ persons, setPersons }) => {

  const [editingId, setEditingId] = useState(null);
  const [editedPerson, setEditedPerson] = useState({
    name: "Oscar",
    role: "Frontend Developer",
    img: "https://bootdey.com/img/Content/avatar/avatar6.png"
  });
  const [isEditing, setIsEditing] = useState(false);

  // handle son eventos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPerson(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleEdit = (id) => {
    // Establece el id de la persona que queremos editar
    setEditingId(id);
    // Activamos el estado de edición
    setIsEditing(true);
    // Buscamos la persona a editar por medio del id y la asigna a personToEdit
    const personToEdit = persons.find(obj => obj.id === id);
    // Establecemos los datos de la persona a editar
    setEditedPerson({ ...personToEdit });
  }

  const handleSave = (e) => {
    setPersons(persons.map(person => person.id === editingId ? editedPerson : person));
    setEditingId(null);
    setEditedPerson({ name: '', role: '', img: ''});
    setIsEditing(false);
  }

  return (
    <div>
      <h2>IT Team</h2>
      <div className='container d-flex justify-content-center '>
        <div className='d-flex flex-row'>
          {persons.map((person) => {
            return (
              <div>
                <Person
                  id={person.id}
                  name={person.name}
                  role={person.role}
                  img={person.img}
                  funcion={() => handleEdit(person.id)}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className='mt-4'>
        <h2>Modificar datos</h2>
        <div className='container text-center'>
          <div className='row justify-content-md-center'>
            <div className='col-8'>
              <input type="text" className='form-control' name='name'
                placeholder='Nombre' value={editedPerson.name}
                onChange={handleChange} />

              <input type="text" className='form-control' name='role'
                placeholder='Rol' value={editedPerson.role} onChange={handleChange} />

              <input type="text" className='form-control' name='img'
                placeholder='Url de la imagen' value={editedPerson.img} onChange={handleChange} />
            </div>
          </div>
          <div className='mt-2'>
            <button className='btn btn-primary' onClick={handleSave}>
              Guardar
            </button>
          </div>
        </div>  
      </div>
    </div>
  )
}
