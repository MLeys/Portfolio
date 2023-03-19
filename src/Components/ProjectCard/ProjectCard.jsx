import React from 'react';
import { ImageBackdrop, ImageButton, Ribbon, CenteringBox, ImageBox, CornerIcon } from '../StyledComps/StyledComps';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';


function ProjectCard({ project }) {
  return ( 
    <Grid xs={6}>
      <ImageButton
        key={project.title}
        style={{
          width: '90%',
          
          
        }}
      >
        <ImageBox sx={{ backgroundImage: `url(${project.thumbnailUrl})` }} />
        <ImageBackdrop className="projectBackdrop" />
        <Ribbon>{project.title}</Ribbon>
        
        <CornerIcon> 
          <RocketLaunchIcon />
        </CornerIcon>
        <CenteringBox>
          <Typography
            component="h3"
            variant="h6"
            color="inherit"
            className="projectTitle"
          >
            {project.title}
            <div className="projectUnderscore" />
          </Typography>
        </CenteringBox>
      </ImageButton>
    </Grid>


  );
}

export default ProjectCard;