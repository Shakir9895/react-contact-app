
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Notfound from "./pages/Notfound";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";
import Nav from "./Components/Nav"
import { useEffect, useState } from "react";


function App() {

  const [contacts,setContacts] = useState([]);

  useEffect(()=>{

    const getContacts = async ()=>{
    const contactsFormServer = await fetchContacts()
    setContacts(contactsFormServer);
    };
    
    getContacts();
  },[]);


  const formSub = async (data) =>{
    const res = await fetch("http://localhost:3004/contacts",{
      method :"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify(data),
    });
    const newdata = await res.json();
    // console.log(data)

    if(res.ok){
      setContacts([...contacts,newdata]);
    }
    
  }

  const fetchContacts= async () =>{
    const res = await fetch("http://localhost:3004/contacts");
    const data = await res.json();
    return data;
  };

  


  const deleteContact= async (id)=>{

    const res = await fetch(`http://localhost:3004/contacts/${id}`,{
      method:"DELETE",
    });
    if (res.status === 200){

      let newContact = contacts.filter((singleContact) =>{
        return singleContact.id!==id;
      });
      setContacts(newContact);
    }
  };

  const getCon = async (id)=>{
    const res = await fetch(`http://localhost:3004/contacts/${id}`);
    const data = await res.json();
    return data;
  }




  

  const favToggle3 = async (id) =>{

    const singleCon = await getCon(id);
    const updTask = {...singleCon,fav:!singleCon.fav};

    const res = await fetch(`http://localhost:3004/contacts/${id}`,{
      method:"PUT",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify(updTask),

    });
    if (res.status===200){
    let updatedContact = contacts.map((singleContact)=>{
      return singleContact.id === id ? {...singleContact,fav:!singleContact.fav} : singleContact;
      
    });
    setContacts(updatedContact);
  }
  };


  return (
    <Router>
      {/* <div>Private Contact</div> */} 
      <Nav />


      <Routes>
        <Route path="/" element={<Home formSub1={formSub}  contacts = {contacts} favToggle={favToggle3} deleteContact1={deleteContact} />} />
        <Route path="/favourite" element={<Favourite   contacts = {contacts} favToggle={favToggle3} deleteContact1={deleteContact} />} />
        <Route path="*" element={<Notfound/>} />
        
      </Routes>
    </Router>
    
  );
}

export default App;