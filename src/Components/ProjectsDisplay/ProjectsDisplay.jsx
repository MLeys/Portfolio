import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ImageBackdrop, ImageButton, Ribbon, CenteringBox, ImageBox } from '../StyledComps/StyledComps';
import { Projects } from '../../lists/projects';
import { alignProperty } from '@mui/material/styles/cssUtils';



export default function ProjectsDisplay() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }} className='section' id='projects'>
      <Typography variant="h3" marked="center" align="center" component="h2">
        Projects
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {Projects.map((project) => (
          <ImageButton
            key={project.title}
            style={{
              width: '40%',
              margin: 20,
            }}
          >
            <ImageBox sx={{ backgroundImage: `url(${project.thumbnailUrl})` }} />
            <ImageBackdrop className="projectBackdrop" />
            <Ribbon>{project.title}</Ribbon>
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
        ))}
      </Box>
    </Container>
  );
}
