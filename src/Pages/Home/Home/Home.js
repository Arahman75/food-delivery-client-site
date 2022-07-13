import { Container } from '@mui/material';
import React from 'react';
import Header from '../Header/Header';
import Navigation from '../../../Shared/Navigation/Navigation';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import TopBanner from '../TopBanner/TopBanner';


const Home = () => {
    return (
        <Container style={{backgroundColor:'#F8F6F7'}}>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <Services></Services>
            <Header></Header>
            <Footer></Footer>
        </Container>
    );
};

export default Home;