import React from 'react';
import '../Home/Home.css';
import travelImg1 from '../../images/Image/Sajek.png';
import travelImg2 from '../../images/Image/Sreemongol.png';
import travelImg3 from '../../images/Image/sundorbon.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <div>
        <div className="travel-home">
         
         <div className="container travel-content">
             <div className="row">
              <div className="col-12 col-md-4 col-lg-4">
             <div className="travel-text">
             <h1>Travel Guru</h1>
             <p>Your dream destination at affordable prices</p>
            <Link to={`/destination`}>
            <button className="btn start-btn">Get Started <i class="fa fa-arrow-right" aria-hidden="true"></i>
             </button>
            </Link>
             </div>
              </div>
                    <div className="col-12 col-md-8 col-lg-8">
               <div className="row">
               <div className="col-12 col-md-4 col-lg-4">  
                  <Link to="/booking/2">
                  <div className="travel-card" >
                   <div className="travel-card-content" style={{backgroundImage: `url(${travelImg1})`}}>          
                   <p className="text-center">Sajek valley</p>
                   </div>               
                   </div>
                  </Link>                   
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                <Link to="/booking/3">
                <div className="travel-card">
                <div className="travel-card-content"  style={{backgroundImage: `url(${travelImg2})`}}>
                  
                   <p className="text-center">Sreemangal</p>
                   </div>
                
                   </div>
                </Link>
                </div>
                <div className="col-12 col-md-4 col-lg-4">
               <Link to="/booking/4">
               <div className="travel-card">
                <div className="travel-card-content"  style={{backgroundImage: `url(${travelImg3})`}}>
                   
                   <p className="text-center">Sundarbans</p>
                   </div>
                
                   </div>
               </Link>
                </div>
               </div>

             </div>
                </div>
            </div>
        </div>
            </div>
        </>
        
    );
};

export default Home;