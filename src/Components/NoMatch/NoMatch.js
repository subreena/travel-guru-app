import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div style={{height: '100vh'}} className="d-flex align-items-center justify-content-center">
            <h1>404 Error! Page not found. <br/>
           <Link to={`/home`}> <button class="btn btn-lg start-btn">Go To Home</button></Link>
            </h1>

        </div>
    );
};

export default NoMatch;