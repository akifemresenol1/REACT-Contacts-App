import { useState, useEffect } from 'react'
import List from "./List";
import Form from "./Form";
import  "./style.css";
function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname:"Akif Emre",
      phone_number:"554466"
    },{
      fullname:"Meri",
      phone_number:"777"
    },{
      fullname:"Ayşe",
      phone_number:"4567456 "
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;
