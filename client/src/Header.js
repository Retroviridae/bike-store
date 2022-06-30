import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import { useSelector, useDispatch } from 'react-redux';
import { update } from './reduxComponents/me/meSlice'
import { useNavigate } from "react-router"


const pages = ['Bikes', 'Signup', 'Login'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const me = useSelector((state) => state.me.value)
  const dispatch = useDispatch()
  let navigate= useNavigate();

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

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        dispatch(update({}))
        navigate('/')
      }
    });
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Vulpes
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem  key={page} onClick={handleCloseNavMenu}>
                  <Typography  textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => ( */}
              <Button
                key='bikes'
                onClick={handleCloseNavMenu}
                href='/bikelist'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                bikes
              </Button>
              {me.id?<Button
                key='profile'
                onClick={handleCloseNavMenu}
                href='/profile'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                profile
              </Button>:<Button
                key='login'
                onClick={handleCloseNavMenu}
                href='/login'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                login
              </Button>}
              {/* <Button
                key='login'
                onClick={handleCloseNavMenu}
                href='/login'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                login
              </Button> */}
              
              {/* {true?
              <Button
                key='login'
                onClick={handleCloseNavMenu}
                href='/login'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                login
              </Button>
              :
              <Button
              key='logout'
              onClick={handleCloseNavMenu}
              href='/logout'
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              logout
            </Button>} */}
            {/* ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar  />
              </IconButton>
            </Tooltip>
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
              {me.id?
                <div>
                <Button key="profile" href='/profile' onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">profile</Typography>
                </Button>

                <Button key="checkout" href='/checkout' onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">checkout</Typography>
                </Button>

                <Button key="logout" onClick={handleLogout}>
                  <Typography textAlign="center">logout</Typography>
                </Button>

              </div>
              :
              <Button key="login" href='/login' onClick={handleCloseUserMenu}>
              <Typography textAlign="center">login</Typography>
            </Button>

              }
              {/* <Button key="profile" href='/profile' onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">profile</Typography>
                </Button>
                <Button key="checkout" href='/checkout' onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">checkout</Typography>
                </Button>

                <Button key="logout" onClick={handleLogout}>
                  <Typography textAlign="center">logout</Typography>
                </Button> */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
