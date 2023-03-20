import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import AboutMe from '../AboutMe/AboutMe';

function IntroSection() {
  return ( 
    <Container className='section' id='intro'>
      <Typography variant='h4' component='h2' marginY={2} paddingTop={2}>
        A little introduction...
      </Typography>
      <Grid 
        container 
        spacing={1}   
        alignItems="center" 
        justifyContent="center"
      >
        
        <Grid xs={12} sm={8}  >
          <img  
            src='https://imgur.com/mIaWlWA.png'
            style={{ width: '200px', borderRadius: '25%', margin: ".5rem" }}
          />
        </Grid>
        <Grid xs={10}  >
          <Typography variant='body2' textAlign='left' margin={1} color='text.primary'>
            Hello! My name is Mike and I an excited to enter the tech industry as a 
            software engineer / full-stack web developer! I have always been drawn to 
            programming starting with customizing controls in CS back in 2000. 
            Driven by that passion I most recently took a leap of faith and completed the 
            SEI bootcamp at General Assembly.
          </Typography>
          <Typography textAlign='left' margin={1} color='text.secondary'>
            I love working with people and take pride in my practice of emotional Intelligence. 
            My experience in leading teams, office meetings, presentations, projects, and running 
            a painting business have endowed me with a rare skill set in the industry. 
          </Typography>
          <Typography textAlign='left' margin={1}>
          Focused ambition, appetite for self-improvement, and action-oriented practices have 
          proven invaluable to my history of past successes and I will continue to do so.
          </Typography>
          <Typography textAlign='left' margin={1}>
            Outside of my passion for coding, some other things I enjoy are playing team sports, 
            camping and hiking, fishing, spending time with friends and family, music, symphonies, 
            theater,  and reading.
          </Typography>
        </Grid>
   
       </Grid>

  
    </Container>
    
   );
}

export default IntroSection;