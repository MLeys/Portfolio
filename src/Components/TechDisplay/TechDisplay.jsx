import React from "react";
import { Technologies } from '../../lists/technologies';
import { IconBackdrop, IconButton } from '../StyledComps/StyledComps';


import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

import TechIcon from "../TechIcon/TechIcon";

const backgroundImage =
  'https://imgur.com/ZflQePB.png';
  // 'https://imgur.com/TvOtqeE.png';
  // 'https://imgur.com/OrHrNij.png';

const sxBackground = {
  
  marginTop: 0,
  backgroundImage: `url(${backgroundImage})`,
  backgroundColor: '#4d2e00', 
  backgroundPosition: 'center',
  
}

function TechDisplay() {
  return ( 
    <Container className="section" id='tech' >
      <Typography variant='h3' component='h3' m={5} p={1} color='common.white'>
        Experience
      </Typography>
      <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap' , justifyContent: 'center'}}>
        {Technologies.map((tech, index) => (
          <IconButton
            key={tech.title}
            style={{
              width: 80,
              height: 80,
              margin: 2,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                px: 2,
                py: 2,
                my: 0,
                mx: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${tech.url})`,               
              }}
            />
            <IconBackdrop className="iconBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.black',
              }}
            >
              <Typography
                component="body2"
                variant="body2"
                color="common.white"
                className="iconTitle"
                sx={{ opacity: 0}}
              >
                {tech.title}
        
              </Typography>
            </Box>
          </IconButton>
        ))}
      </Box>
    </Container>
    
   );
}

export default TechDisplay;