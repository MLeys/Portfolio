import React from 'react';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import theme from '../../theme';

const sections = [
  { title: "About", link: "#intro" },
  { title: "Technologies", link: "#tech" },
  { title: "Projects", link: "#projects" }
]

const options = [
  { title: 'Resume', link: '#'},
  { title: 'Contact', link: '#contact'}
]


function MainHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: theme.palette.primary.main, 
        color: theme.palette.primary.contrastText
      }}
    >
      <Container maxWidth="100%">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <Tooltip title='Menu'>
              <IconButton
                size="large"
                aria-label="More Information"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon  />
              </IconButton>
            </Tooltip>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {sections.map((page) => (
                <MenuItem >
                  <Link 
                    key={page.title} 
                    href={page.link} 
                    variant='subtitle2'
                    underline='hover'
                    onClick={handleCloseNavMenu} 
                  >
                    {page.title}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            component="h2"
            color={theme.palette.common.white}
            sx={{
              mr: 2,
              display: { xs: 'flex', sm: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.2rem',
            }}
          >
            Michael Leys
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            {sections.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href={page.link}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Stack direction='row'>
              <Tooltip title="Options">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                  <Avatar alt="MyAvatar" src="https://imgur.com/FPjCW0h.png" />
                </IconButton>
              </Tooltip>
              <Stack>
                <Typography
                  variant="h6"
                  component="h2"
                  color={theme.palette.secondary.contrastText}
                  sx={{ display: { xs: 'none', sm: 'flex'} }}
                >
                  Michael Leys
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="h5"
                  sx={{
                    mr: 5,
                    display: { xs: 'none', sm: 'flex' , alignSelf: 'center'},
                  }}
                >
                  Software Engineer
                </Typography>
              </Stack>
            </Stack>
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {options.map((option) => (
                <MenuItem sx={{ margin: 0}}>
                  <Link 
                    key={option.title} 
                    href={option.link} 
                    variant='subtitle2'
                    underline='hover'
                    onClick={handleCloseUserMenu} 
                  >
                    {option.title}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MainHeader;