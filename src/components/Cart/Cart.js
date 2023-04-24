import React, { useEffect, useState } from 'react';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = (props) => {
    const [breakTime, setBreakTime]=useState(0)
    
    const notify = () => {
        toast("Wow!, Your Activity is completed!")
        setBreakTime(0);
        localStorage.removeItem("break-time")
        props.setTime(0);
    };

    const handleBreakTimeInfo=(clickedBreakTime)=>{
        setBreakTime(clickedBreakTime);
        localStorage.setItem("break-time", clickedBreakTime)
    }

    useEffect(()=>{
        const storedBreakTime = localStorage.getItem("break-time")
        setBreakTime(+storedBreakTime)
    },[])

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
                    <li onClick={()=>handleBreakTimeInfo(20)}>20</li>
                    <li onClick={()=>handleBreakTimeInfo(30)}>30</li>
                    <li onClick={()=>handleBreakTimeInfo(40)}>40</li>
                    <li onClick={()=>handleBreakTimeInfo(50)}>50</li>
                    <li onClick={()=>handleBreakTimeInfo(60)}>60</li>
                </div>
            </div>
            <div className="exercise-details mt-4 ps-2">
                <h5>Exercise Details</h5>
                <div className="exercise-details-info">
                    <p>Exercise Time: {props.time} minutes</p>
                    <p>Break Time: {breakTime}</p>                    
                </div>
            </div>
            <div className='text-center m-2 mt-4'>
                <button onClick={notify}
                className='btn btn-warning w-100'>Activity Complete</button>
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                ></ToastContainer>
            </div>
        </div>
    );
};

export default Cart;