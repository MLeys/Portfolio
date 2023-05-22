import React from "react";
import { styled } from '@mui/system';
import {  Tools } from '../../lists/technologies';
import { IconBackdrop, IconButton } from '../StyledComps/StyledComps';


import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';


import TechList from "../TechList/TechList";

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

const TechSubSection = styled( Paper )({
  
  elevation: 16,
  backgroundColor: 'black',
  color: 'white',
})

const SubTitle = styled( Typography )({
  varient: "h6",
  fontSize: 24,
  color: 'blueGray2.light',
  padding: 8,
  borderRadius: 4,
})

function TechDisplay() {
  const Technologies = []
  return ( 
    <Container  
      id='tech'
      sx={{
        my: 15,
        minHeight: '80vh',
        paddingBottom: 10,
      }} 
    >
      <Typography variant='h3' component='h2' m={5} p={1} >
        Technologies
      </Typography>
      <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap' , justifyContent: 'center'}}>
        {Technologies.map((tech, index) => (
          <IconButton
            key={`tech-${index}`}
            style={{
              width: 100,
              height: 100,
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

      <TechSubSection>
        <SubTitle >
          Subtitle here
        </SubTitle>
      </TechSubSection>

      <Typography mt={4} variant="h6" fontSize={24}> Other Tools, Systems, and Authentication</Typography>
      <Box
        display='flex'
        justifyContent='center'
        flexWrap='wrap'
        p={1}
        m={1}
      >
        
        {Tools.map((tool, index) => (
        <Box m={.5} key={`tool-${index}`}>
          <Chip color="blue" label={tool.title}/>
        </Box>
          
        ))}
      </Box> 
      <Typography sx={{ fontSize: 10}}>
         Currently exploring a primary focus of interest.
      </Typography>
      <Typography sx={{ fontSize: 10}}>
         Daily practice learning and understanding the low level Rust programming language, and further developing existing skills such as Javascript, React, Express, and Node.js. 
      </Typography>
    </Container>
    
   );
}

export default TechDisplay;