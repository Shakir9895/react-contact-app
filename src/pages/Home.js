import React from 'react'
import Contact from '../Components/Contact';
import Form from '../Components/Form';

function Home({formSub1,contacts,deleteContact1,favToggle}) {


  return (
    <div className='container my-5'>
      <div className='row justify-content-sm-center my-5'>

        <Form  formSub2={formSub1}/>
        </div>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5'>
        {contacts.map((singleContact) => {
          return <Contact key = {singleContact.id} contact = {singleContact}  favToggle1={favToggle} deleteContact2={deleteContact1} />
        })}
        {contacts.length === 0 && <div> No Contact to show </div>}

        

      </div>
    </div>
  )
}

export default Home;