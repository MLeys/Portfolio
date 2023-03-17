import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ImageBackdrop, ImageButton } from '../StyledComps/StyledComps';
import { Projects } from '../../lists/projects';



export default function ProjectsDisplay() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Projects
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {Projects.map((project) => (
          <ImageButton
            key={project.title}
            style={{
              width: '33%',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${project.url})`,
              }}
            />
            <ImageBackdrop className="projectBackdrop" />
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
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="projectTitle"
              >
                {project.title}
                <div className="projectMarked" />
              </Typography>
            </Box>
          </ImageButton>
        ))}
      </Box>
    </Container>
  );
}
