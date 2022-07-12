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

const Navigation = () => {
    return (
        <Container>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
             
              <img src={logo} alt="" style={{width:'50px'}}/>
            </IconButton>

           
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">About</Button>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Order Now</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      </Container>
    
    );
};

export default Navigation;