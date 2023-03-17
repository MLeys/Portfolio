import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://imgur.com/MrxUPHp.png';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Michael Leys
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 6 } }}
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
    </ProductHeroLayout>
  );
}
