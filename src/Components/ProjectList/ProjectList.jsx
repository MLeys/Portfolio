import * as React from 'react';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
import styled from '@emotion/styled';
import theme from '../../theme';


const CustomList = styled(List) ({
  // backgroundColor: theme.palette.secondary.dark,
  backgroundColor: theme.palette.blueGray.light,
  // color: theme.palette.common.black,
  '& .MuiListItemIcon-root': {
    alignContent: 'right',
    justifyContent: 'right',
    alignItems: 'center',
    marginRight: 10,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 30,

  },
  '& .MuiListItemText-primary': {
    fontSize: 18,
    fontWeight: '600',
    color: theme.palette.blueGray.contrastText,
    textAlign: 'left',
    
  },
  '& .MuiListItemText-secondary': {
    fontSize: 14,
    fontWeight: '200',
    color: theme.palette.blueGray.contrastText,
    textAlign: 'left',
    marginRight: 5,
  },

});


export default function ProjectList( { project }) {
  const techInfo = project.tech.join(', ')
  const featuresInfo = project.features.join(', ')

  return (
    <Box pl={2} bgcolor='blueGray.light' >
      <CustomList className='customList'>
        <Paper elevation={5} sx={{  backgroundColor: 'blueGray.dark', mx: 0, mb: .5}}>
          <ListItemButton className='projectListItem' component='a' target='_blank' href={project.deploymentUrl}>
            <ListItemIcon>
              <LaunchIcon />
            </ListItemIcon>
            <ListItemText
              primary={project.title}
              secondary={project.about}
            />
          </ListItemButton>
        </Paper>
        <Paper elevation={5} sx={{  backgroundColor: 'blueGray.dark', mx: 0, mb: .5}}>
          <ListItemButton className='projectListItem'  component='a' target='_blank' href={project.gitHubUrl} >
            <ListItemIcon >
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText
              primary="Features"
              secondary={featuresInfo}
            />
          </ListItemButton>
        </Paper>
        <Paper elevation={5} sx={{  backgroundColor: 'blueGray.dark', mx: 0, mb: .5}}>
          <ListItemButton className='projectListItem' >
            <ListItemIcon>
              <TerminalIcon />
            </ListItemIcon>
            <ListItemText
              primary="Tech"
              secondary={techInfo}
            />
          </ListItemButton>
        </Paper>
      </CustomList>
    </Box>
  );
}