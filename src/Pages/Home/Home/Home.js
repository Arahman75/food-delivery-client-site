import { Container } from '@mui/material';
import React from 'react';
import Header from '../Header/Header';
import Navigation from '../../../Shared/Navigation/Navigation';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <Container style={{backgroundColor:'#F8F6F7'}}>
            <Navigation></Navigation>
            <Header></Header>
            <Services></Services>
            <Footer></Footer>
        </Container>
    );
};

export default Home;