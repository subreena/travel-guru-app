import React from 'react';
import { Link } from 'react-router-dom';

const Travel = (props) => {
const {id ,title , img} = props.travel;
    return (
        <div className="col-12 col-md-4 col-lg-4">
        <Link to={`/booking/${id}`}>
        <div className="travel-card">
        <div className="travel-card-content"  style={{backgroundImage: `url(${img})`}}>
           
    <p className="text-center">{title}</p>
           </div>
        
           </div>
        </Link>
        </div>
    );
};

export default Travel;