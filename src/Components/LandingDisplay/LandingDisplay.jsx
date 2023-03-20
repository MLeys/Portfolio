import React from 'react';
import "./LandingDisplay.css"
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import LandingContent from '../LandingContent/LandingContent';

const LandingSectionLayout = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  zIndex: 0,
  [theme.breakpoints.up('sm')]: {
    height: '100vh',
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

const backgroundImage =
  'https://imgur.com/MrxUPHp.png';

const sxBackground = {
  marginTop: 7,
  backgroundImage: `url(${backgroundImage})`,
  backgroundColor: '#4d2e00', 
  backgroundPosition: 'center',
}

function LandingDisplay() {

  return ( 
    <LandingSectionLayout>
      <Container 
        sx={{
          mt: 3,
          mb: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <LandingContent />
        {/* Inserts box to dim background image */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'common.black',
            opacity: .5,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />
        <KeyboardDoubleArrowDownIcon
          fontSize='large'
          alt="arrow down"
          sx={{ position: 'absolute', bottom: 32 }}
        />

      </Container>
    </LandingSectionLayout>

   );
}

export default LandingDisplay;