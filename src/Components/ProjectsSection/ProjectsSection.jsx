import React from 'react';
import "./ProjectsSection.css";
import { 
  RootContainer,
  ImagesWrapper,
  ImageIconButton,
  ImageButton,
  ImageSrc,
  ImageBackdrop,
  ImageTitle,
  ImageMarked,
  Images
} from '../StyledComps/StyledComps';
import { styled, css } from '@mui/material/styles'

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import ProjectCard from '../ProjectCard/ProjectCard';







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
    <RootContainer component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Projects
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {projects.map((project) => (

          <ImageIconButton
            key={project.title}
            style={{
              width: '35%',
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
                backgroundPosition: 'center',
                backgroundImage: `url(${project.thumbnailUrl})`,
              }}
            />
            
            <ImageBackdrop />
                      
            

            {/* Stuff inside button */}
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
        
              <ImageTitle >
                <Typography
                  component="h4"
                  variant="h4"
                  color="inherit"
                >
                  {project.title}
                 
                  <ImageMarked></ImageMarked>
                  </Typography>
              </ImageTitle>
            </Box>

          </ImageIconButton>
        ))}

      </Box>

      <Typography>
        outside button
      </Typography>


      {/* <ImagesWrapper>
        {projects.map((project) => (
          <ImageWrapper
            key={project.title}
            style={{
              width: '30%'
            }}
          >
            <ImageSrc src={project.thumbnailUrl} />
            <ImageBackdrop className="imageBackdrop" />
            <ImageButton className="imageButton">
              <ImageTitle
                component="h3"
                variant="h6"
                color="inherit"
              >
                {project.title}
                <div className="imageMarked" />
              </ImageTitle>
            </ImageButton>
          </ImageWrapper>
        ))}
      </ImagesWrapper> */}
    </RootContainer>
  );







  // return ( 
  //   <Container className='projectsContainer Container' id='projects'>
  //     <Grid container spacing={{ xs: 2, md: 3 }}  >
  //       {projects.map((project, index) => (
  //         <Grid display="flex" justifyContent="center" alignItems="center" xs={12} sm={6} md={4} key={`projectGrid-${index}`}>
  //           <ProjectCard project={project} index={index}/>
  //         </Grid>
  //       ))}
  //     </Grid>
  //   </Container>

  //  );
}

export default ProjectsSection;