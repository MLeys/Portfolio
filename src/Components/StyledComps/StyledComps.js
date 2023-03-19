import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import theme from '../../theme';

export const CornerIcon = styled(Box)({
  position: 'absolute',
  top: 0,
  right: 0,
  padding: 3,
  zIndex: 5,
  borderRadius: '25%',
  backgroundColor: theme.palette.orange.dark,
})

export const CenteringBox = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  overflow: '',
})

export const ImageBox = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

export const Ribbon = styled(Box)({
  position: 'absolute',
  top: '1rem',
  left: '-2rem',
  backgroundColor: theme.palette.primary.dark,
  color: 'white',
  padding: '0.5rem',
  fontSize: '1rem',
  fontWeight: 600,
  // transform: 'rotate(45deg)',
  width: '150px',
  textAlign: 'center',
  zIndex: 5,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-1rem',
    left: 0,
    border: '1rem solid transparent',
    borderRightColor: theme.palette.primary.dark,
   },
  // '&::after': {
  //   content: '""',
  //   position: 'absolute',
  //   bottom: '-1rem',
  //   left: 0,
  //   border: '1rem solid transparent',
  //   borderTopColor: theme.palette.primary.dark,
  // },
});


export const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: theme.palette.purple.contrastText,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));


export const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  marginLeft: 20,
  height: '40vh',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
    
  },
  '&:hover .projectBackdrop': {
    zIndex: 0,
    opacity: 0.2,
  },
  '&:hover .projectUnderscore': {
    opacity: 0,
  },
  '&:hover .projectTitle': {
    color: theme.palette.secondary.dark,
    background: theme.palette.secondary.light,
    border: '4px solid currentColor',
  },
  '& .projectTitle': {
    position: 'relative',
    color: theme.palette.purple.main,
    
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .projectUnderscore': {
    height: 6,
    width: 40,
    opacity: 1,
    background: theme.palette.purple.main,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 20px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export const IconBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0,
  transition: theme.transitions.create('opacity'),
}));


export const IconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('sm')]: {
    width: '25% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .iconBackdrop': {
    opacity: 0.15,
  },
  '&:hover .iconTitle': {
    
    opacity: 1,
    fontSize: 25,
    fontWeight: 700,
  },
  '& .iconTitle': {
    position: 'relative',
    padding: `${theme.spacing(1)} ${theme.spacing(.5)} 10px`,
    transition: theme.transitions.create('opacity'),
  },
  '& .projectMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));
