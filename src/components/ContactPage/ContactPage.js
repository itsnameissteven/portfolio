import React from 'react'; 
import ContactForm from '../ContactForm/ContactForm';

const ContactPage = () => {
  return (
      <div className="contact">
        <div className="contact__side-bar">
          <h2 className="contact__side-bar__header">Get in Touch!</h2>
          <p className="contact__side-bar__blurb"> 
            If you would like to connect to chat about my projects please reach out.
          </p>
          <p className="contact__side-bar__blurb">
            I am currently in the market for a full time junior position. If you or your company has open opportunities that seem to be a good fit send an email.
          </p>
          <p className="contact__side-bar__blurb">I love to chat about almost anything. If you would like to set up a time to talk email me and I will respond with my schedule</p>
          <p className="contact__side-bar__blurb">stevenrmancine@gmail.com</p>
        </div>
        <ContactForm />
      </div>   
  )
}

export default ContactPage;
