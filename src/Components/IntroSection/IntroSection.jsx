import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

import AboutMe from '../AboutMe/AboutMe';

function IntroSection() {
  return ( 
    <div className='introSection section'>
      <Typography variant='h3' component='h2' marginY={2}>
        About Me
      </Typography>
      <Grid 
        container 
        spacing={1}   
        alignItems="center" 
        justifyContent="center"
      >
        
        <Grid xs={12} md={6} >
          <img  
            src='https://imgur.com/g04SEb6.png'
            style={{ width: '100%', borderRadius: '25%', margin: ".5rem" }}
          />
          <Box>
            Contact buttons  and links here
          </Box>
        </Grid>
        <Grid xs={12} md={6}>
          <AboutMe />
        </Grid>
   
        </Grid>

  
    </div>
    
   );
}

export default IntroSection;