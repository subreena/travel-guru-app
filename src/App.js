import React, { createContext, useState } from 'react';
import { Nav } from 'react-bootstrap';
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LogIn from './Components/LogIn/LogIn';
import Footer from './Components/Footer/Footer';
import Destination from './Components/Destination/Destination';
import Booking from './Components/Booking/Booking';
import TravelHotel from './Components/TravelHotel/TravelHotel';
import NoMatch from './Components/NoMatch/NoMatch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser , setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
    
       <Router>
       <NavBar></NavBar>
       <Switch>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/destination">
           <Destination></Destination>
         </Route>
        
         <Route path="/booking/:id">
           <Booking></Booking>
         </Route>

         <Route path="/login">
           <LogIn></LogIn>
         </Route>
         <PrivateRoute path="/travelHotel/:id">
           <TravelHotel></TravelHotel>
         </PrivateRoute>
         <Route exact path="/">
           <Home></Home>
         </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
       </Switch>
       <Footer></Footer>
     </Router>
   
    </UserContext.Provider>
    
  );
}

export default App;
