import React from "react";
import Container from '@mui/material/Container'
import ContactForm from "../ContactForm/ContactForm";

function ContactDisplay() {
  return ( 
    <Container className="section" id='contact' >
      <ContactForm />
    </Container>
   );
}

export default ContactDisplay;