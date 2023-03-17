import React from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function LandingContent() {
  return (  
    <div>
      <Typography 
        color="inherit" 
        variant="h2"
        sx={{
          letterSpacing: '.5rem' 
        }}
      >
        Michael Leys
      </Typography>
      <Typography
        color="inherit"
        variant="h5"
        sx={{ 
          mb: 4, 
          mt: { xs: 4, sm: 6 }, 
          letterSpacing: '.5rem' 
        }}
      >
        Software Engineer - Full Stack Developer
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="#projects"
        sx={{ minWidth: 150 }}
      >
        Projects
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Passion, Persistence, Personal responsibility
      </Typography>
    </div>
  );
}

export default LandingContent;