import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';

import ProjectCard from '../ProjectCard/ProjectCard';

const projects = [
  {id: 1, name: "Project 1", description: "First project haahah"},
  {id: 2, name: "Project 2", description: "Second project with skills blagh"},
  {id: 3, name: "Project 3", description: "last project that had blag and blah and ..."}
]

function ProjectsSection() {
  return ( 
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {projects.map((project, index) => (
        <Grid xs={2} sm={4} md={4} key={index}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
   );
}

export default ProjectsSection;