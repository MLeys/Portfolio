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
              Hello! My name is Mike and I an excited to enter the tech industry as a 
              <a className='highlight'> software engineer</a>! My appetite for 
              self-improvement, growth, and learning drive me to become better every day.
            </AboutText>
            <AboutText>
              I am developed a passion for coding working a self trained Applications Engineer where I 
              had the opportunity to create solutions that solved business problems, streamline processes,
               increased productivity.
            </AboutText>
            <AboutText >
              Earned experience in leading teams, office meetings, presentations, projects, and running 
              a painting business have endowed me with a rare skill set in the industry. I'm 
              detail orientied and strive to only put my best self out into the world.
            </AboutText>
            <AboutText  >
             My focused ambition, respect (especially of my time), self-driven accountibility, 
             and action-oriented practices have proven invaluable to my successes. 
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