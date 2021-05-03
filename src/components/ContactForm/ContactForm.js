import React, {useState} from 'react';
import Axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('Submit')

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending');
    Axios.post("http://localhost:5000/api/email",{
      name: name,
      email: email,
      message: message
    })
    .then(response => {
      if (response.data.status === "sent") {
        setName('');
        setEmail('');
        setMessage('');
        setStatus('Submit');
      } else if (response.data.status === 'failed') {
        alert('Message Failed')
      }
    })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__input-container">
        <label htmlFor="name">Name:</label><br />
        <input 
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label><br />
        <input 
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label><br />
        <textarea 
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit">{status}</button>
    </form>
  )

}

export default ContactForm;
