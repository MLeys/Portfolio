import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';

import ProjectCard from '../ProjectCard/ProjectCard';

const projects = [
  {
    id: 1, 
    title: "Project 1", 
    description: "First project haahah", 
    humbnailUrl: "https://imgur.com/TjSIYbx.jpg"
  },
  {
    id: 2, 
    title: "Project 2", 
    description: "Second project with skills blagh", 
    thumbnailUrl: "https://imgur.com/TjSIYbx.jpg"
  },
  {
    id: 3, 
    title: "Project 3", 
    description: "last project that had blag and blah and ...", 
    thumbnailUrl: "https://imgur.com/TjSIYbx.jpg"
  }
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