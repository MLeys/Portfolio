import React from "react";

import { IconBackdrop, IconButton } from '../StyledComps/StyledComps';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


export default function TechIcon({ tech }) {
  const [hasImageError, setHasImageError] = React.useState(false);

  const handleImageError = () => {
    setHasImageError(true);
  };

  function handleTouchTechIcon(e) {

  }

  return (
    <IconButton
      style={{
        width: 100,
        height: 100,
        margin: 2,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          px: 2,
          py: 2,
          my: 0,
          mx: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          bgcolor: 'blueGrayLight.dark',
          borderRadius: 50,
        }}
      >

        {!hasImageError && (
          <>
          <IconBackdrop className="iconBackdrop" />
          <Box
            component={Paper}
            elevation={15}
            bgcolor={'transparent'}
            borderRadius={50}
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'common.black',
            }}
          >
            <Typography

              className="iconTitle"
              sx={{ opacity: 0}}
            >
              {tech.title}
      
            </Typography>
          </Box>
          <img
            src={tech.url}
            onError={handleImageError}
            alt={`${tech.title}`}
            onTouchStart={handleTouchTechIcon}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              color: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              
            }}
          />
          </>
        )}
        {hasImageError && (
          <Typography
            sx={{
              position: 'absolute',
              fontSize: '1.2rem',
            }}
          >
            {tech.title}
          </Typography>
        )}
      </Box>
    </IconButton>
  );
}