import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Navbar from './components/Navbar';
import { useState } from 'react';
import uuid4 from 'uuid4';

function App() {

  const [contact, setContact] = useState([])

  const addContact = (data)=>{
    setContact([...contact,{id: uuid4(), data}])
  }

  const removeContact = (id) =>{
    const updatedList = contact.filter((val)=>{
      return val.id!==id
    })
    setContact(updatedList)
  }
  return (
    <div>
     <Navbar />
     <AddContact addContact={addContact}/>
     <ContactList contact = {contact} removeContact= {removeContact}/>
    </div>
  );
}

export default App;
