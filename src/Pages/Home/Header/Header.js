import { Button, Grid, Typography } from '@mui/material';
import { Container, height, width } from '@mui/system';
import React from 'react';
import banner from '../../../images/banner2.jpg';

// const verticalCenter ={
//   display: 'flex',
//   alignItem: 'center',
//, backgroundColor:'#F8C5E7'
//   height: '400'


 
// }

const Header = () => {

  return (
   <Container style={{height:450,width:'96%'}}>
     <Grid container spacing={2} sx={{my:6 }}>
    <Grid item xs={12} md={6} style={{textAlign:'left',margin:'auto'}} >
    <Typography variant="h4" component="div" sx={{fontWeight:'500'}}>
      Keep Healthy Life <br></br>Eating Healthy Food. 
      </Typography>
    <Typography variant="h6" component="div" sx={{my:2}}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, assumenda. Nisi cumque error ea eum ab sunt quod sapiente earum!
      </Typography>
      <Button variant="contained" color="success" >
Buy Now
</Button>
    </Grid>
    <Grid item xs={6} sx={{mt:4}}>
    <img src={banner} style={{width: '100%',height: '350px'}} alt="" />
    </Grid>
  
  </Grid>
   </Container>
  );
};

export default Header;