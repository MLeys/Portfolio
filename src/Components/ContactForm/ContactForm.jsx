import * as React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';


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
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h4">
            Contact
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={1}>
              <Grid xs={12}>
                <TextField
                  id="name"
                  label="Name"
                  name="name"
                  required
                  fullWidth
                  value={emailForm.name}
                  onChange={handleChange}
                  variant='filled'
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  id="title"
                  label="Job Title"
                  name="title"
                  required
                  fullWidth
                  value={emailForm.title}
                  onChange={handleChange}
                  variant='filled'
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  id="company"
                  label="Company"
                  name="company"
                  required
                  fullWidth                  
                  value={emailForm.company}
                  onChange={handleChange}
                  variant='filled'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
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
              </Grid>
              <Grid item xs={12}>
                <TextField
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
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
            <Snackbar open={emailSent} onClose={() => setEmailSent(false)}>
              <Alert sx={{ backgroundColor: 'primary.contrastText', color: 'primary.dark' }} severity="success">Email submitted successfully!</Alert>
            </Snackbar>
          </Box>
        </Box>
      </Container>
    
  );
}