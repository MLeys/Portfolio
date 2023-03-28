import React from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function LandingContent() {
  return (  
    <div>
      <Typography
        className="landingName" 
        color="inherit" 
        variant="h2"
        sx={{
          mt: {xs: 8, sm:0},
          letterSpacing: '.25rem' 
        }}
      >
        Michael Leys
      </Typography>
      <Typography
        className="landingTitle"
        color="inherit"
        fontWeight='400'
        variant="h5"
        sx={{ 
          mb: { xs: 4, sm: 8 },
          mt: { xs: 4, sm: 8 }, 
          letterSpacing: '.3rem' 
        }}
      >
        Software Engineer - Full Stack Development
      </Typography>
      <Button
        className="landingButton"
        color="secondary"
        variant="contained"
        size="large"
        
        href="#projects"
        sx={{ minWidth: 100 }}
      >
        Projects
      </Button>
      <Typography
        className="landingWords"
        variant="body2" 
        color="inherit" 
        sx={{ mt: 4 }}
      >
        Growth, Determination, Personal responsibility
      </Typography>
      <Typography variant="body1" color="inherit" >
        
      </Typography>
    </div>
  );
}

export default LandingContent;