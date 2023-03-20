import React from "react";
import Container from '@mui/material/Container'
import ContactForm from "../ContactForm/ContactForm";

function ContactDisplay() {
  return ( 
    <Container id='contact' sx={{ my: 15}} >
      <ContactForm />
    </Container>
   );
}

export default ContactDisplay;