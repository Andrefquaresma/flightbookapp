import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import FlightApp from './components/FlightApp';
import {BrowserRouter, Route} from "react-router-dom";
import Welcome from './components/Welcome';
import FetchAirports from './fetch/FetchAirports';

function App() {




  return (
    <BrowserRouter>
      <Route path="/">
        <FlightApp />
      </Route>  
      <Route path="/welcome">
        <Welcome/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
