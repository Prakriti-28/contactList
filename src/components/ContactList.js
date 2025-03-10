import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';


export default function ContactList(props) {
    const {contact, removeContact} = props
    const ContactList = contact.map((val)=>{
        return(
            <div className='contacts'>
                <div>{val.data.name}</div>
                <div>{val.data.email}</div>
                <span onClick={()=>removeContact(val.id)}><DeleteIcon/></span>
            </div>
        )
    })
  return (
    <>
      <div className='contactsHeader'>Contact List</div>
      <div>{ContactList}</div>
      
    </>
  )
}
