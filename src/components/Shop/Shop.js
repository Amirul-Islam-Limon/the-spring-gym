import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [services, setServices]=useState([])
    const [time, setTime]=useState(0)

    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=> setServices(data));
    },[services])

    const handleAddToList=(clickedTime)=>{
        const newTime = time + clickedTime;
        setTime(newTime);
        // console.log("button clicked", newTime);
    }
    return (
        <div className='shop'>
            <div className="shop-container">
                {/* <h1>This is Shop Container</h1> */}
                {
                    services.map(service=> <Product
                    product={service}
                    handleAddToList={handleAddToList}
                    key={service._id}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                time={time}
                setTime={setTime}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;