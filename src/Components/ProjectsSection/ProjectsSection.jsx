import React from 'react';
import "./ProjectsSection.css"
import Grid from '@mui/material/Unstable_Grid2';

import ProjectCard from '../ProjectCard/ProjectCard';
import { Typography } from '@mui/material';

const projects = [
  {
    id: 1, 
    title: "Project 1", 
    description: "First project haahah", 
    thumbnailUrl: "https://imgur.com/TjSIYbx.jpg"
  },
  {
    id: 2, 
    title: "Project 2", 
    description: "Second project with skills blagh", 
    thumbnailUrl: "https://imgur.com/RjtfRr1.png"
  },
  {
    id: 3, 
    title: "Project 3", 
    description: "last project that had blag and blah and ...", 
    thumbnailUrl: "https://imgur.com/c0BFXCj.png"
  }
]



function ProjectsSection() {
  return ( 
    <div className='projectsSection section' id='projects'>
      <Grid container spacing={{ xs: 2, md: 3 }}  >
        {projects.map((project, index) => (
          <Grid display="flex" justifyContent="center" alignItems="center" xs={12} sm={6} md={4} key={`projectGrid-${index}`}>
            <ProjectCard project={project} index={index}/>
          </Grid>
        ))}
      </Grid>
    </div>

   );
}

export default ProjectsSection;