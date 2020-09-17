import React from 'react';
import { useHistory } from 'react-router-dom';
import Shuffle from '../DestinationData/Shuffle';
import Travel from '../Travel/Travel';

const Destination = () => {
const history = useHistory();
const travelDestination = Shuffle.slice(0,3);
const handleBooking = () =>{
    history.push(`booking/${travelDestination[0].id}`)
}
    return (
        <div className="travel-home">
            <div className="container travel-content">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-4 d-flex align-items-center">
                        <div>
                        <h1 className="text-light">Select your Destination and Visit Today!</h1>
                        <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias labore, atque porro laborum, reiciendis, quos facilis sed dolore corporis soluta vero officia beatae!</p>
    <p className="text-light">Want to Visit {travelDestination[0].title}?</p>
                        <button className="btn start-btn" onClick={handleBooking}>Book Now <i class="fa fa-arrow-right" aria-hidden="true"></i> </button>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-8">
                        <div className="row">
                           {
                                travelDestination.map( item => <Travel travel={item} key={item.id} ></Travel>)
                           }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;