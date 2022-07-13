import React from 'react';
import topbanner from '../../../images/topbanner.jpg';

const TopBanner = () => {
    return (
        <div>
            <h1 style={{color:'#F118B3'}}><b>Welcome To Our Food Delivery Center</b></h1>
            <h2><b>Order Your Favorite Food.</b></h2>
            <br />
            <img src={topbanner} alt="" style={{ height: '500px', width: '97%' }} />
        </div>
    );
};

export default TopBanner;