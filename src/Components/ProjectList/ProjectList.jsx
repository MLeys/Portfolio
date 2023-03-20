import * as React from 'react';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Paper from '@mui/material/Paper'
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';
import styled from '@emotion/styled';
import theme from '../../theme';


const CustomList = styled(List) ({
  backgroundColor: theme.palette.blueGray.dark,
  color: theme.palette.common.black,
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
    <Paper elevation={20}>
      <CustomList className='customList'>
        <ListItemButton className='projectListItem' disableGutters disablePadding component='a' href={project.deploymentUrl}>
          <ListItemIcon>
            <LaunchIcon />
          </ListItemIcon>
          <ListItemText
            primary={project.title}
            secondary={project.about}
          />
        </ListItemButton>
        <ListItemButton className='projectListItem' disableGutters disablePadding component='a' href={project.gitHubUrl} >
          <ListItemIcon >
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText
            primary="Features"
            secondary={featuresInfo}
          />
        </ListItemButton>
        <ListItemButton className='projectListItem' disableGutters disablePadding>
          <ListItemIcon>
            <TerminalIcon />
          </ListItemIcon>
          <ListItemText
            primary="Tech"
            secondary={techInfo}
          />
        </ListItemButton>
      </CustomList>
    </Paper>
  );
}