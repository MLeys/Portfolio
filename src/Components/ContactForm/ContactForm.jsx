import React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  function handleChange(e){
    setEmailForm({
      ...emailForm,
      [e.target.name]: e.target.value
    });
  }

async function handleSubmit(e) {
  e.preventDefault();
  try {
    console.log("HERE")
    await emailjs.send('service_8qgftwr', 'template_3rv9xth', emailForm, 'I2g4LRL1m6FvLTl89')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  } catch(err) {
    console.log(err, ("Error sending email"))
  }
}

  return (
    <div className="ContactForm">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={emailForm.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            name="email"
            value={emailForm.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="5"
            placeholder="Message"
            name="message"
            value={emailForm.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;



