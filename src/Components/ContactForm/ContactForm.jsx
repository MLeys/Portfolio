import React, { useState } from "react";
import { sendForm, send } from "@emailjs/browser";
import Button from '@mui/material/Button';



function ContactForm() {
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const templateParams = {
    name: 'James',
    notes: 'Check this out!'
  };  

  function handleChange(e){
    console.log(e, '<===E')
    setEmailForm({
      ...emailForm,
      [e.target.name]: e.target.value
    });
    console.log(emailForm, '<===EMAIL FORM')
  }
  // function handleSubmit(e){
  //     send('service_8qgftwr', 'template_3rv9xth', templateParams, 'I2g4LRL1m6FvLTl89')
  //     .then(function(response) {
  //         console.log('SUCCESS!', response.status, response.text);
  //     }, function(error) {
  //         console.log('FAILED...', error);
  //     });
  // }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await send('service_8qgftwr', 'template_3rv9xth', emailForm, 'I2g4LRL1m6FvLTl89')
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
    <form id="contact-form">
        
        <input type="hidden" name="contact_number"></input>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={emailForm.name} onChange={handleChange}/>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={emailForm.email} onChange={handleChange}/>

        <label htmlFor="message">Message</label>
        <textarea type="text" name="message" value={emailForm.message} onChange={handleChange}></textarea>
        <Button type="submit" value="Send" onSubmit={handleSubmit}> Submit</Button>
    </form>
   );
}

export default ContactForm;