import * as React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';

import { alpha, styled } from '@mui/material/styles';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Paper from '@mui/material/Paper';
import theme from '../../theme';



const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: theme.palette.primary.dark,
  },
  '& .MuiFilledInput-root': {
    border: '1px solid #000',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.black,
    transition: theme.transitions.create([
      'border-color',
      'background-color',
    ]),
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      borderColor: theme.palette.common.black,
    },
  },
});

export default function ContactForm() {
  const [emailForm, setEmailForm] = useState({
    name: '',
    title: '',
    company: '',
    email: '',
    message: ''
  });

  const [emailSent, setEmailSent] = useState(false);


  function clearEmailForm() {
    setEmailForm({
      name: '',
      title: '',
      company: '',
      email: '',
      message: ''
    })
  }

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
        setEmailSent(true);
        clearEmailForm();
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });
    } catch(err) {
      console.log(err, ("Error sending email"))
    }
  }

  return (
    <Grid container spacing={1} justifyContent='center' >
      <Grid xs={10} sm={8} md={6} >
        <Typography component="h1" variant="h4" mb={5}>
          Contact
        </Typography>
        <Paper 
          component="form"
          noValidate 
          onSubmit={handleSubmit} 
          elevation={15} 
          
          sx={{
            backgroundColor: theme.palette.blueGray.contrastText,
            color: theme.palette.error.light, 
          }}
        >
          <CustomTextField
            id="name"
            label="Name"
            name="name"
            required
            fullWidth
            value={emailForm.name}
            onChange={handleChange}
            variant='filled'
          />
          <CustomTextField
            id="title"
            label="Job Title"
            name="title"
            required
            fullWidth
            value={emailForm.title}
            onChange={handleChange}
            variant='filled'
          />
          <CustomTextField
            id="company"
            label="Company"
            name="company"
            required
            fullWidth                  
            value={emailForm.company}
            onChange={handleChange}
            variant='filled'
          />
          <CustomTextField
            id="email"
            label="Email Address"
            name="email"
            required
            fullWidth
            autoComplete="email"
            value={emailForm.email}
            onChange={handleChange}
            variant='filled'
          />
          <CustomTextField
            id="message"
            label="Message"
            name="message"
            required
            fullWidth
            value={emailForm.message}
            onChange={handleChange}
            variant='filled'
            multiline
            minRows={5}
          />
          <Button
            type="submit"
            fullWidth
            
            variant="contained"
            sx={{ my: 0, height: 50}}
          >
            Send
          </Button>
          <Snackbar open={emailSent} onClose={() => setEmailSent(false)}>
            <Alert sx={{ backgroundColor: 'primary.contrastText', color: 'primary.dark' }} severity="success">Email submitted successfully!</Alert>
          </Snackbar>
        </Paper>
      </Grid>    
    </Grid>
    
  
   

    
  );
}