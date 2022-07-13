import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/system';
import logo from '../../images/logo (1).png';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
             
            > */}

            <img src={logo} alt="" style={{ width: '50px' }} />
            <Typography variant='h6' sx={{ mx: 2 }}>Food Delivery</Typography>
            {/* </IconButton> */}


            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            {/* <Link to='/about'> <Button color="inherit">About</Button></Link> */}
            <a href='/about'> <Button color="inherit">About</Button></a>
            <a href='/home'> <Button color="inherit">Home</Button></a>
            <a href='/manageOrder'> <Button color="inherit">Manage Order</Button></a>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>

  );
};

export default Navigation;