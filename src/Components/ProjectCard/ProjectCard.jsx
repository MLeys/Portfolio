import React from 'react';
import { ImageBackdrop, ImageButton, Ribbon, CenteringBox, ImageBox} from '../StyledComps/StyledComps';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { styled } from '@mui/material/styles';



function ProjectCard({ project }) {
  return ( 
    <ImageButton
      key={project.title}
      style={{
        width: '90%',
      }}
    >
      <ImageBox elevation={20} className="projectBackdrop" sx={{ backgroundImage: `url(${project.thumbnailUrl})` }} />
      <CenteringBox>
        <Typography
          component="h3"
          variant="h6"
          color="inherit"
          className="projectTitle"
        >
          Check it out!
        </Typography>
        <Ribbon>{project.title}</Ribbon>
      </CenteringBox>
    </ImageButton>
  );
}

export default ProjectCard;