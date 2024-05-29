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
  const [deleteId, setDeleteId] = useState(null);


  // handle son eventos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPerson(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  // Metodo para editar
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

  // Metodo para guardar
  const handleSave = (e) => {
    setPersons(persons.map(person => person.id === editingId ? editedPerson : person));
    setEditingId(null);
    setEditedPerson({ name: '', role: '', img: '' });
    setIsEditing(false);
  }

  // Metodo para eliminar
  const handleDelete = (id) => {
    setDeleteId(id);
    /* Sin modal se usa lo de abajo */
    // const updatedPersons = persons.filter(obj => obj.id !== id);
    // setPersons(updatedPersons);
  }

  const confirmDelete = () => {
    /* Con modal */
    const updatedPersons = persons.filter(obj => obj.id !== deleteId);
    setPersons(updatedPersons);
    setDeleteId(null);
  }

  const cancelDelete = () => {
    setDeleteId(null);
  }

  const handleCreate = () => {
    setPersons([...persons, { id: persons.length + 1, ...editedPerson }]);
    setEditedPerson({ name: '', role: '', img: '' });
  }


  return (
    <div>
      <h2>IT Team</h2>
      <div className='container'>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex flex-wrap'>
          {persons.map((person) => {
            return (
              <div key={person.id}>
                <Person
                  num={person.id}
                  name={person.name}
                  role={person.role}
                  img={person.img}
                  edit={() => handleEdit(person.id)}
                  delete={handleDelete}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className='mt-4'>
        <h2>{isEditing ? 'Modificar persona' : 'Crear persona'}</h2>

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

          <div className='mt-4'>
            <button className='btn btn-primary' onClick={isEditing ? handleSave : handleCreate}>
              {isEditing ? 'Guardar' : 'Agregar'}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div id="deleteModal" className='modal fade' tabIndex='-1'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h3 className='modal-title'>Confirmar eliminación</h3>
              <button type='button' className='btn-close' data-bs-dismiss="modal"
                aria-label='close' onClick={cancelDelete}>

              </button>
            </div>
            <div className='modal-body'>
              <p>¿Estás seguro de eliminar a {persons.find(obj => obj.id === deleteId)?.name} ?</p>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary'
                data-bs-dismiss="modal" onClick={cancelDelete}>
                Cancelar
              </button>
              <button type='button' className='btn btn-danger'
                data-bs-dismiss="modal" onClick={confirmDelete}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
