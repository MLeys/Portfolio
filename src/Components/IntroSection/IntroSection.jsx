import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import theme from '../../theme';
import { blue } from '@mui/material/colors';

const AboutText = styled(Typography) ({
    fontSize: 16,
    fontWeight: 300,
    color: theme.palette.blueGray.contrastText,
    backgroundColor: theme.palette.blueGray2.dark,
    padding: '5px 15px 5px 15px',
    lineHeight: 1.4,
    textAlign: 'left',
})

const AboutToggleButton = styled(ToggleButton) ({
  backgroundColor: theme.palette.blueGray.dark,
  borderRadius: 0,
  color: theme.palette.blueGray2.contrastText,
  "&.Mui-selected": {
    color: theme.palette.blueGray.contrastText,
    backgroundColor: theme.palette.blueGray.dark
  },
  "&.Mui-disabled": {
    color: theme.palette.secondary.light,
    backgroundColor: theme.palette.blueGray2.dark
  },
  "&.Mui-selected:hover, &:hover": {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.primary.main,
  },
})


function IntroSection() {
  const [showDetails, setShowDetails] = useState({ display: 'none'});
  const [isShow, setIsShow] = useState(false);
  const [showSummary, setShowSummary] = useState({display: {xs: 'block'}});
  const [version, setVersion] = useState('summary');
  
  function handleClickDetails(){
    if (isShow) {
      setVersion('detailed')
      setShowDetails({ display: 'none'})
      setShowSummary({display: {xs: 'block'}})
    } else {
      setVersion('summary')
      setShowDetails({display: { xs: 'block' }})
      setShowSummary({display: 'none'})
    }
    setIsShow(!isShow)
  }

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
            <ToggleButtonGroup
              fullWidth
              value={version}
              exclusive
              onChange={handleClickDetails}
              aria-label='AboutVersion'  
              sx={{ backgroundColor: 'blueGray2'}}
            >
              <AboutToggleButton disabled={!isShow} value="summary">Short</AboutToggleButton>
              <AboutToggleButton disabled={isShow} value="detailed">Detailed</AboutToggleButton>
            </ToggleButtonGroup>


            <AboutText sx={{paddingBottom: 2}} > </AboutText>
            <AboutText sx={showSummary}> Hello, my name is Mike!</AboutText>
            <AboutText sx={showSummary}>
                I'm a determined <a className='highlight'> software engineer </a>
                with a strong drive for personal and professional growth. I am committed 
                to producing the best possible outcome and continually improving my skills 
                through a rigorous daily routine. My goal is to push the limits and achieve 
                excellence in everything I do.
            </AboutText>

            <AboutText sx={showDetails}>
              Hello! My name is Mike and I am a 
              <a className='highlight'> software engineer</a>!
            </AboutText>
            <AboutText sx={showDetails}>
              I am driven by a deep determination to succeed and a 
              strong appetite for personal and professional growth. You can rely on me to put 
              in the hard work necessary to produce the best possible outcome. Every day, I 
              follow a comprehensive routine that enables me to continuously improve and 
              develop new skills. My goal is to become the best possible version of myself, 
              always pushing the limits and striving for excellence.
            </AboutText>
            <AboutText sx={showDetails}>
              I was drawn to programming at an early age, customizing controls in CS (Counter-Strike) 
              back around the 2000s. My interest in coding was supercharged during my experiences 
              creating machine vision applications to solve issues and increase quality and 
              productivity in my previous position as an Applications Engineer. Driven by that 
              passion, I recently completed the SEI bootcamp at General Assembly.
            </AboutText>
            <AboutText sx={showDetails}>
              As a software engineer, I thrive on solving business problems and developing elegant 
              solutions working in and outside of a team environment. If I don't know immediately 
              how to solve a problem, I spare no effort in my attempts to present a solution. I hold 
              myself to a high standard and strive to only put my best self out into the world.
            </AboutText>
            <AboutText sx={showDetails}>
              I've earned experience in leading teams, office meetings, presentations, projects, and 
              running a painting business, which has endowed me with a rare skill set in the industry.
            </AboutText>
            <AboutText sx={showDetails}>
              Outside of the office, I enjoy playing team sports, camping, hiking, fishing, spending 
              time with friends and family, music, symphonies, theater, and reading.
            </AboutText>
            <AboutText sx={showDetails}>
              With my focused ambition, self-driven growth, appetite for learning, action-oriented 
              practices, and demonstrated experiences, I believe I can be an indispensable asset to 
              any team. You can rely on me to put in the hard work necessary to produce the best 
              possible outcome.
            </AboutText>
            <AboutText sx={{paddingBottom: 2}} > </AboutText>
          </Paper>

        </Grid>
   
       </Grid>

  
    </Container>
    
   );
}

export default IntroSection;