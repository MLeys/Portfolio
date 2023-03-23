import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material';
import theme from '../../theme';

const AboutText = styled(Typography) ({
  fontSize: 16,
  fontWeight: 300,
  color: theme.palette.blueGray.contrastText,
  backgroundColor: theme.palette.blueGray2.dark,
  padding: '5px 15px 5px 15px',
  lineHeight: 1.4,
  textAlign: 'left',
})


function IntroSection() {
  return ( 
    <Container sx={{ my: 0 }} id='intro' >
      <Typography variant='h4' component='h2' marginY={5} paddingTop={2}>
        About
      </Typography>
      <Grid 
        container 
        spacing={1}   
        alignItems="center" 
        justifyContent="center"
      >
        <Grid xs={12} sm={4} >
          <img  
            src='https://imgur.com/mIaWlWA.png'
            style={{ width: '200px', borderRadius: '25%'}}
          />
        </Grid>
        <Grid xs={12} sm={8}  >
          <Paper elevation={15} square >
            <AboutText >
              Hello! My name is Mike and I am excited to enter the tech industry as a 
              <a className='highlight'> software engineer</a>! My appetite for 
              self-improvement, growth, and learning drive me to become better every day.
            </AboutText>
            <AboutText>
              I was drawn to programming at an early age customizing controls in CS (Counter-Strike) 
              back around the 2000's. My interest in coding was supercharged during my experiences 
              creating machine vision applications to solve issues and increase quality and productivity
              in my previous position as an Applications Engineer.
              Driven by that passion, I most recently took a leap of faith and completed the 
              SEI bootcamp at General Assembly.
            </AboutText>
            <AboutText>
              I thrive on solving business problems and developing elegant solutions working 
              in and outside of a team environment. If I do not know immdeiately how to solve a problem,
              I spare no effort in my attemps to present a solution!
            </AboutText>
            <AboutText >
              Earned experience in leading teams, office meetings, presentations, projects, and running 
              a painting business have endowed me with a rare skill set in the industry. I hold myself to a high 
              standard and strive to only put my best self out into the world.
            </AboutText>
            <AboutText  >
              My focused ambition, self-driven growth, appetite for learning, action-oriented practices, 
              and demonstated experiences make me indispensable 
            </AboutText>
            <AboutText >
              Outside of the office I enjoy playing team sports, 
              camping and hiking, fishing, spending time with friends and family, music, symphonies, 
              theater,  and reading.
            </AboutText>
          </Paper>

        </Grid>
   
       </Grid>

  
    </Container>
    
   );
}

export default IntroSection;