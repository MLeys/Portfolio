import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import BoltIcon from '@mui/icons-material/Bolt';
import TerminalIcon from '@mui/icons-material/Terminal';
import styled from '@emotion/styled';
import theme from '../../theme';
import { Typography } from '@mui/material';

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

  }
});

export default function ProjectList( { project }) {
  const techInfo = project.tech.join(', ')

  return (
      
        <CustomList>
          <ListItem disableGutters disablePadding>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListText
              primary={project.title}
              secondary={project.about}
            />
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemIcon>
              <BoltIcon />
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
          <ListItem disableGutters disablePadding>
            <ListItemIcon>
              <TerminalIcon />
            </ListItemIcon>
            <ListText
              primary="Tech"
              secondary={techInfo}
              
 
            />
          </ListItem>

          <ListItem>
            links to github and all that stuff
          </ListItem>
        </CustomList>
     
   
  );
}