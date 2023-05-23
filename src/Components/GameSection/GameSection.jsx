import React, { useState } from "react";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import theme from '../../theme';

const Games = [
  {
    index: 0,
    title: "Pong",
    src: "../src/Games/Pong/index.html",
  },
  {
    index: 1,
    title: "Snake",
    src: "../src/Games/snake_game/index.html",
  }
]

function GameSection() {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleClick = (gameIndex) => {
    setSelectedGame(gameIndex);
  }

  return (
    <Box bgcolor={'purple.dark'} >
    <Grid container inHeight={500} pt={10} id='games'>
      <Grid xs={12} >
        <Typography 
          variant="h3" 
          component="h2"
          paddingTop={2}
          paddingBottom={2}
        >
          Games
        </Typography>
      </Grid>
      <Grid xs={12} >
        {Games.map((game) => (
          <Button
            key={game.index} 
            variant="contained" 
            onClick={() => handleClick(game.index)}
            sx={{ 
              margin: 2, 
              bgcolor: 'orange.dark', 
              color: 'blueGray.contrastText',
             '&:hover': {
                bgcolor: 'orange.main'
              }
            }}
          >
            Play {game.title}
          </Button>
        ))}
      </Grid>
      <Grid xs={12} minHeight={480}>
        {selectedGame !== null && 
          <iframe
            src={Games[selectedGame].src}
            width="640" 
            height="480"
            style={{border: "none"}} 
            title={Games[selectedGame].title}
          />
        }
      </Grid>
    </Grid>
  </Box>
    
  );
}

export default GameSection;
