import React from 'react'

function Contact({ contact: { name, Phone, Email, id,fav }, deleteContact2 ,favToggle1 }) {
  // console.log(contact)
  return (
    <>
      <div className='col'>
        <div className='card shadow-sm w-100'>
          <div className='card-header'>
            <div className='row'>
              <div className='col-6'>{name}</div>
              <div onClick={()=>{favToggle1(id)}} className='col-2 offset-4'>
                <i className={fav ? "fas fa-star text-warning" : "far fa-star text-warning "}></i>
              </div>
            </div>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>{Email}</li>
            <li className='list-group-item'>{Phone}</li>
            <button onClick={() => { deleteContact2(id) }}
              type='button'
              className='btn btn-outline-danger'>
              Delete
            </button>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact