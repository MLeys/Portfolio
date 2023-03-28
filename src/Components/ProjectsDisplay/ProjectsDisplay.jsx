import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import theme from '../../theme';

import { Projects } from '../../lists/projects';

import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectList from '../ProjectList/ProjectList';


export default function ProjectsDisplay() {
  return (
    <Container 
      id='projects'
      sx={{
        my: 15,
        backgroundColor: theme.palette.blueGray.main,
        paddingBottom: 15,
      }}  
    >
      <Typography 
        variant="h3" 
        component="h2"
        paddingTop={12}
        paddingBottom={2}
      >
        Projects
      </Typography>
      {Projects.map((project, index) => (
        <Box mx={1} p={1} my={5} bgcolor='blueGray.light' >
          <Grid container my={1} key={`container-${index}`} >
            <Grid xs={12} sm={6}>
              <ProjectCard project={project} />
            </Grid>
            <Grid xs={12} sm={6}>
              <Paper elevation={0} >
                <ProjectList project={project} />
              </Paper>
            </Grid>
          </Grid>
        </Box>

      ))}
    </Container>
  );
}
