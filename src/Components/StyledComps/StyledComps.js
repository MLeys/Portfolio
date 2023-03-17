import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

export const RootContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(4),
}));

export const ImagesWrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexWrap: "wrap",
}));

export const ImageWrapper = styled('div')(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  marginTop: theme.spacing(8),
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 100
  },
  "&:hover": {
    zIndex: 1
  },
  "&:hover $imageBackdrop": {
    opacity: 0.15
  },
  "&:hover $imageMarked": {
    opacity: 0
  },
  "&:hover $imageTitle": {
    border: "4px solid currentColor"
  }
}));

export const ImageButton = styled('div')(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white
}));

export const ImageSrc = styled('div')({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%"
});

export const ImageBackdrop = styled('div')(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: theme.palette.common.black,
  opacity: 0.5,
  transition: theme.transitions.create("opacity")
}));

export const ImageTitle = styled('div')(({ theme }) => ({
  position: "relative",
  padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  '&:hover': {
    border: "4px solid currentColor"
  }
}));

export const ImageMarked = styled('div')(({ theme }) => ({
  height: 3,
  width: 18,
  background: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity")
}));

export const Images = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexWrap: "wrap"
}));

