import React, {useState} from 'react';
import axios from 'axios';
import './ContactFrom.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('Submit');

  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={}
          required
        />
      </div>

    </form>
  )

}

export default ContactForm;
