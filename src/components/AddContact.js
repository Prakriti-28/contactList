import React, { useState } from 'react'

export default function AddContact({addContact}) {
    const [contactData, setContactData] = useState({name:"", email:""})

    const handleChange =(e)=>{
         if(e.target.name === "name"){
            setContactData({...contactData, name: e.target.value})
         }else{
            setContactData({...contactData, email: e.target.value})
         }
    }

    const addList = () =>{
        if(contactData.name==="" || contactData.email===""){
            alert("please give the details")
            return
        }else{
            addContact(contactData) 
            setContactData({name: "" , email: ""})
        }
    }

  return(
    <div className='formHeader'>
      <div className='add-contact'>Add Contact</div>
      <form>
        <label>Name:</label><br/>
        <input type='text' placeholder='enter name' name = "name" value={contactData.name} onChange={handleChange}/><br/>
        <label>Email:</label><br/>
        <input type='text' placeholder='enter name' name = "email" value={contactData.email} onChange={handleChange}/>
      </form>
      <br/>
      <button className='btn' onClick={addList}>Add Contact</button>
    </div>
  )
}
