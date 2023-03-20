import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { Projects } from '../../lists/projects';




import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectList from '../ProjectList/ProjectList';



export default function ProjectsDisplay() {
  return (
    <Container className='section' id='projects'>
      <Typography variant="h3" marked="center" align="center" component="h2">
        Projects
      </Typography>
  
      {Projects.map((project) => (
        <Grid container mt={5}>
          <Grid xs={12} sm={6}>
            <ProjectCard project={project} />
          </Grid>
          <Grid xs={12} sm={6}>
            <Paper elevation={0} square={true}>
              <ProjectList project={project} />
            </Paper>
            
          </Grid>

        </Grid>
      ))}

    </Container>
  );
}
