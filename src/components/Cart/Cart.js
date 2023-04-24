import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <div className='about-user'>
                <div className='user-info'>
                    <img src="https://i.ibb.co/cbnLfNb/my-photo.jpg" alt="" />
                    <h6>Amirul Islam</h6>
                </div>
            </div>
            <div className='add-break-container'>
                <h5>Add a Break</h5>
                <div className='add-break-info'>
                    <li>20</li>
                    <li>30</li>
                    <li>40</li>
                    <li>50</li>
                    <li>60</li>
                </div>
            </div>
        </div>
    );
};

export default Cart;