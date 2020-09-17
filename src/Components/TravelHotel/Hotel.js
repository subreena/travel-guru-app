import React from 'react';
import '../TravelHotel/Hotel.css'

const Hotel = (props) => {
    const{
        hotelImg,
        hotelId,
        hotelTitle,
        guests,
        bedrooms,
        beds,
        baths,
        features,
        cancel,
        star,
        starByPerson,
        price,
        total,
    } = props.hotel;
    return (
      <div className="hotel-card">
            
            <div className="col-6 col-md-6 col-lg-6 d-flex align-items-center">
                <div className="hotel-img">
                <img src={hotelImg} alt="" width="200px" height="180px"/>
                </div>
            </div>
            <div className="col-6 col-md-6 col-lg-6">
                <div className="hotel-info">
                <h3 style={{fontSize : '20px'}}>{hotelTitle}</h3>
    <p> <small>
    <span>{guests} guests</span> <span>{bedrooms} bedrooms</span> <span>{beds} beds </span> <span>{baths} baths </span>
        </small> </p>
    <p style={{fontSize:"14px"}}>{features} <br/>
    {cancel}
     </p>
    <p> 
    <small className="d-flex justify-content-between font-weight-bold">
        
            
        <p> <i className="fa fa-star" aria-hidden="true" style={{color: '#FBBC04'}}></i> <span className="text-muted">{star}/{starByPerson}</span> </p> 
        <p className="text-dark">{price}/night <span className="text-muted">{total} total</span> </p> 
            
            </small>
   
        </p>
                </div>
            </div>
        </div>
     
    );
};

export default Hotel;