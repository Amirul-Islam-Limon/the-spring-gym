import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [services, setServices]=useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=> setServices(data));
    },[services])
    return (
        <div className='shop'>
            <div className="shop-container">
                {/* <h1>This is Shop Container</h1> */}
                {
                    services.map(service=> <Product
                    product={service}
                    key={service._id}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;