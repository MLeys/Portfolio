import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'; 
import Box from '@mui/material/Box'


function AboutMe() {
  return ( 
    <Box marginX={2} textAlign='left'>
      <Typography textAlign='left'>
        Hi! I am a Full Stack Software Engineer with 15+ years of experience
        in creating and implementing solutions to solve business problems. 
        Thrive on growth, learning, and improvement.
      </Typography>
      <Typography textAlign='left'>
        I firmly believe in personal responsibility and accountability and hold myself to 
        a high standard. 
      </Typography>
      <Typography textAlign='left'>
        What you put out into the world reflects on you.
      </Typography>
      
      <Typography textAlign='left'> 
        I thrive on solving business problems by developing elegant solutions working 
        in and outside of a team environment. If I do not know immdeiately how to solve a problem
        I gaurentee I will find it, and in a timely manner!
      </Typography>
      <Typography textAlign='left'>
        Outside of the office I love to play team sports, camp and hike, fish, play games
        with friends or family, attend symphonies or any live music for that manner, and 
        helping others whenever possible.
      </Typography>
    </Box>
   );
}

export default AboutMe;