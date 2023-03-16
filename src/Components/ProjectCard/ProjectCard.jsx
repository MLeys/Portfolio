import React from 'react';
import './ProjectCard.css'

import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import OpenInBrowser from '@mui/icons-material/OpenInBrowser';
import Stack from '@mui/material/Stack';


export default function ProjectCard({ project }) {
  return (
    <Grid xs={12} sm={6} md={4} key={project.id}>
      <Paper elevation={3}>
        <img 
          className='projectCardImg'
          src={project.thumbnailUrl}
          alt={project.title} 
        />
        <Box paddingX={1} >
          <Stack direction='row'  >
            <OpenInBrowser sx={{ fontSize: 30, ml: 0, mr: 1}} />
            <Typography variant='subtitle1' component='h2' >
              {project.title}
            </Typography>
          </Stack>
        </Box>
        <Box paddingX={1}>
          <Typography variant='body1' component='p'>
            {project.description}
          </Typography>
        </Box>


      </Paper>
    </Grid>
  
  );
  
  
}