import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box'

const LandingSectionLayout = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});

function LandingSection() {

  return ( 
    <LandingSectionLayout>



    </LandingSectionLayout>

   );
}

export default LandingSection;