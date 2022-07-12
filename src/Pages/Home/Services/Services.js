import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import burger from '../../../images/image1.jpg';
import pizza from '../../../images/image2.jpg';
import fasta from '../../../images/image3.jpg';
import cocke from '../../../images/image4.jpg';
import coffee from '../../../images/image5.jpg';
import butter from '../../../images/image6.jpg';
import Service from '../Service/Service';
import { Container, Typography } from '@mui/material';


const services = [
    {
        id: 1,
        name: 'Burger',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus vero distinctio doloremque nisi hic libero atque voluptate, itaque incidunt!',
        image: burger
    },
    {
        id: 2,
        name: 'Pizza',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus vero distinctio doloremque nisi hic libero atque voluptate, itaque incidunt!',
        image: pizza
    }, {
        id: 3,
        name: 'Fasta',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus vero distinctio doloremque nisi hic libero atque voluptate, itaque incidunt!',
        image: fasta
    }, {
        id: 4,
        name: 'Mutton',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus vero distinctio doloremque nisi hic libero atque voluptate, itaque incidunt!',
        image: cocke
    }, {
        id: 5,
        name: 'Ege Cray',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus vero distinctio doloremque nisi hic libero atque voluptate, itaque incidunt!',
        image: coffee
    }, {
        id: 6,
        name: 'Bon Burger',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus vero distinctio doloremque nisi hic libero atque voluptate, itaque incidunt!',
        image: butter
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container style={{ height: '1010px' }}>
                <Typography variant="h4" gutterBottom component="div" sx={{ pt: 2, color: '#DF109A', fontWeight: '600' }}>
                    OUR SERVICES
                </Typography>
                <Typography variant="h5" gutterBottom component="div" sx={{ pb: 2, color: '#ED212E', fontWeight: '500' }}>
                    AS SOON AS POSSIBLE ORDER YOUR FAVORITE FOOD.
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }

                </Grid>
            </Container>
        </Box>
    );
};

export default Services;