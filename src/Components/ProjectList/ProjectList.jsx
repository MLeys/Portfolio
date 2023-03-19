import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import BoltIcon from '@mui/icons-material/Bolt';
import TerminalIcon from '@mui/icons-material/Terminal';
import styled from '@emotion/styled';
import theme from '../../theme';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

const ListText = styled(ListItemText) ({
  primaryTypographyProps: {
    fontSize: 20,
    fontWeight: 'medium',
    color: 'secondary.contrastText',
    textAlign: 'left',
  },
  secondaryTypographyProps: {
    fontSize: '12',
    color: 'secondary.contrastText',
    textAlign: 'left',
  }
})

const CustomList = styled(List) ({
  backgroundColor: theme.palette.background.placeholder,
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
    fontWeight: '400',
    color: theme.palette.secondary.contrastText,
    textAlign: 'left',
  },
  '& .MuiListItemText-secondary': {
    fontSize: 14,
    fontWeight: '200',
    color: theme.palette.orange.contrastText,
    textAlign: 'left',

  },

});

const CustomListItem = styled(ListItem)({
  '&:hover .menuListItem':{
    opacity: 1,
  }

})

export default function ProjectList( { project }) {
  const techInfo = project.tech.join(', ')

  return (
      
        <CustomList className='customList'>
          <CustomListItem className='projectListItem' disableGutters disablePadding component='a' href={project.deploymentUrl}>
            <ListItemIcon>
              <LaunchIcon />
            </ListItemIcon>
            <ListText
              primary={project.title}
              secondary={project.about}
            />
          </CustomListItem>
          <ListItem className='projectListItem' disableGutters disablePadding component='a' href={project.gitHubUrl} >
            <ListItemIcon >
              <GitHubIcon />
            </ListItemIcon>
            <ListText
              primary="Features"
              secondary={
                project.features.map((f) => (
                 <Typography textAlign='left'>{f}</Typography>
                ))
              }
            />
          </ListItem>
          <ListItem className='projectListItem' disableGutters disablePadding>
            <ListItemIcon>
              <TerminalIcon />
            </ListItemIcon>
            <ListText
              primary="Tech"
              secondary={techInfo}
            />
          </ListItem>
        </CustomList>
     
   
  );
}