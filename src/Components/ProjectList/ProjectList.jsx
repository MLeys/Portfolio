import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import FolderIcon from '@mui/icons-material/Folder';
import styled from '@emotion/styled';
import theme from '../../theme';

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
  '& .MuiListItemButton-root': {
    paddingLeft: 0,
    paddingRight: 0,
  },
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

  return (
      <Grid xs={12} md={6} sx={{m: 0, p: 0}}>
        {/* <ListItem disableGutters disablePadding>
          <ListItemIcon sx={{m: 2, p: 0, justifyContent: 'right'}}>
            <FolderIcon />
          </ListItemIcon>
          
          <ListItemText
            primary="Main Text"

            secondary= "secondary text here"

          />
        </ListItem> */}
        <CustomList>
          <ListItem disableGutters disablePadding>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListText
              primary={
             "PRIMARY text"
                         }
              secondary="SECONDARY text"
            />
          </ListItem>
        </CustomList>
      </Grid>
   
  );
}