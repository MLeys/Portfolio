import React from "react";
import theme from '../../theme';

import { styled } from '@mui/system';

import { Primary, Tools, ProjectManagement, Authentications, WebTech, BackEnd, FrontEnd, Languages, VersionControl, Databases, Cloud, Other, SoftSkills } from '../../lists/technologies';

import { IconBackdrop, IconButton } from '../StyledComps/StyledComps';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';

import TechIcon from "../TechIcon/TechIcon";

const SubTitle = styled( Typography )({
  fontSize: 30,
  color: 'black',
  padding: 4,
})

const techCategories = [
  { title: 'Primary Skills', list: Primary },
  { title: 'Tools', list: Tools },
  { title: 'Project Management', list: ProjectManagement },
  { title: 'Authentications', list: Authentications },
  { title: 'Web Technologies and Protocols', list: WebTech },
  { title: 'Back End', list: BackEnd },
  { title: 'Front End', list: FrontEnd },
  { title: 'Languages', list: Languages },
  { title: 'Version Control', list: VersionControl },
  { title: 'Databases', list: Databases },
  { title: 'Cloud', list: Cloud },
  { title: 'Other', list: Other },
  { title: 'Soft Skills', list: SoftSkills },
];

function TechDisplay() {
  return ( 
    <Container  
      id='tech'
      sx={{
        my: 15,
        minHeight: '80vh',
        paddingBottom: 10,
      }} 
    >
      <Typography variant='h3' component='h2' m={5} p={1} >
        Technologies
      </Typography>

      {techCategories.map((category, index) => (
        <Box key={`category-${index}`} sx={{ mb: 4 }}>
          <Card elevation={10} color="black" sx={{bgcolor: 'blueGrayLight.main', color: 'black'}}>
            <SubTitle >
              {category.title}
            </SubTitle>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' , justifyContent: 'center'}}>
              {category.list.map((tech, index) => (
                <TechIcon tech={tech} key={`tech-${index}`} />

              ))} 
            </Box>
          </Card>
        </Box>
      ))}
    </Container>
  );
}

export default TechDisplay;
