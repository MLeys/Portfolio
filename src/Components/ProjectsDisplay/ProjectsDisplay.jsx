import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ImageBackdrop, ImageButton } from '../StyledComps/StyledComps';

const projects = [
  {
    id: 1, 
    title: "Project 1", 
    description: "First project haahah", 
    url: "https://imgur.com/TjSIYbx.jpg",
  },
  {
    id: 2, 
    title: "Project 2", 
    description: "Second project with skills blagh", 
    url: "https://imgur.com/RjtfRr1.png",
  },
  {
    id: 3, 
    title: "Project 3", 
    description: "last project that had blag and blah and ...", 
    url: "https://imgur.com/c0BFXCj.png",
  }
]



export default function ProjectsDisplay() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Projects
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {projects.map((project) => (
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
