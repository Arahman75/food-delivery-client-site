import { Grid, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { Button, CardActionArea, CardActions } from '@mui/material';

const Service = ({service}) => {
    const {id, name, description, image} = service;

    const url = `/delivery/${id}`;
    return (
        <Grid item xs={4} sm={4} md={4} >

<Card sx={{ maxWidth: 345, pb:2}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color:'#DF109A',fontWeight:'500'}}>
          {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
     <a href={url} style={{margin: 'auto'}}> <Button variant="contained" >
Booking Now
</Button></a>
      </CardActions>
    </Card>
        </Grid>
    );
};

export default Service;