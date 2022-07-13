import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


const DeliveryDetails = () => {
    const {deliveryId} = useParams();
    // const [product, setProduct] = useState({});
   
    // useEffect(() => {
    //     const url=`http://localhost:3000/services/${deliveryId}`;
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data =>setProduct(data));
    // },[])
    return (
        <div>
          <Navbar></Navbar>
            <h2>Delivery Details Coming Soon.{deliveryId}</h2>
           
        </div>
    );
};

export default DeliveryDetails;