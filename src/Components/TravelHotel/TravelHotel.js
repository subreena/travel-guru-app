import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import DestinationData from '../DestinationData/DestinationData';
import Hotel from './Hotel';

const TravelHotel = () => {
    const [loggedInUser] = useContext(UserContext);
    const {id} = useParams();
    const hotelData = DestinationData.find((travel) => travel.id === id );
    const mapSrc = hotelData.mapSrc;
    const hotels = hotelData.hotel;
    
    return (
        <div className="travel-hotel">
            <div className="container">
    <p className="text-center">Welcome {loggedInUser.name} Hope you have a wonderful journey! Your email({loggedInUser.email})</p>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                    <h2>Stay In {hotelData.title}</h2>
                    <div className="hotel">
                        {
                            hotels.map((hotel) => <Hotel hotel={hotel} key={hotel.hotelId}></Hotel>)
                        }
                    </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                    <h2>Hotels in {hotelData.title} <small>(see map)</small></h2>
                    <iframe src={mapSrc} width="100%" height="450px" title={id} frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelHotel;