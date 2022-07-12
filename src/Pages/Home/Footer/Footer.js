import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ width: '100%',height:'500px' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
          <Typography variant="h6" gutterBottom component="div">
       This is footer
      </Typography>
          </Grid>
          <Grid item xs={3}>
          <Typography variant="h6" gutterBottom component="div">
       This is footer
      </Typography>
          </Grid>
          <Grid item xs={3}>
          <Typography variant="h6" gutterBottom component="div">
       This is footer
      </Typography>
          </Grid>
          <Grid item xs={3}>
          <Typography variant="h6" gutterBottom component="div">
       This is footer
      </Typography>
          </Grid>
         
        </Grid>
        <Typography variant="h6" gutterBottom component="div" style={{textAlign:'center'}}>
      All content reserved 2022 Copy right.
      </Typography>
      </Box>
    );
};

export default Footer;