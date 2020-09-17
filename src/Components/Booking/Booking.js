import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DestinationData from '../DestinationData/DestinationData';
import '../Booking/Booking.css'

const Booking = () => {
    const history = useHistory();
    const handleLogin = () =>{
        history.push(`/travelHotel/${id}`);
    }
 const {id} = useParams();
 const bookingData = DestinationData.find((travel) => travel.id === id);
console.log(bookingData);
 

    return (
        <div className="travel-home">
            <div className="container travel-content">
           <div className="row">
               <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center">
               <div className="travel-text">
    <h1>{bookingData.title}</h1>
    <p>{bookingData.longDes}</p>
            
             </div>
               </div>
               <div className="col-12 col-md-6 col-lg-6">
                   <form action="" className="booking-form">
                   <div className="form-group">
									<label>Origin</label>
									<input type="text" className="form-control" placeholder="e.g Dhaka" />
								</div>
								<div className="form-group">
									<label>Destination</label>
									<input type="text" className="form-control" placeholder={bookingData.title} readOnly/>
								</div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                        <label htmlFor="fromDate">From</label>
                                        <input type="date" name="fromDate" id="fromDate"/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                        <label htmlFor="toDate">To</label>
                                        <input type="date" name="toDate" id="toDate"/>
                                        </div>
                                    </div>

                                </div>
                                <button className="btn start-btn w-100 mt-3" onClick={handleLogin} >Start Booking</button>
                   </form>
               </div>
           </div>
           </div>
        </div>
    );
};

export default Booking;