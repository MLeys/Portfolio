import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

import AboutMe from '../AboutMe/AboutMe';

function IntroSection() {
  return ( 
    <div className='section' id='intro'>
      <Typography variant='h5' component='h2' marginY={2} paddingTop={2}>
        A little introduction...
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
            style={{ width: '90%', borderRadius: '25%', margin: ".5rem" }}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <AboutMe />
        </Grid>
        <Grid xs={12} marginY={3}>
          ==========    Contact links / buttons here  ===========
        </Grid>
   
       </Grid>

  
    </div>
    
   );
}

export default IntroSection;