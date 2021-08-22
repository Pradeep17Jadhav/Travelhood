import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import AppBar from "./Components/AppBar/AppBar"
import UpcomingTreks from './Components/UpcomingTreks/UpcomingTreks';
import Holidays from './Components/Holidays/Holidays';
import Footer from './Components/Footer/Footer'

function App() {

    return (
        <div className="App">
            <AppBar></AppBar>
            <UpcomingTreks></UpcomingTreks>
            <Holidays></Holidays>

            <Footer></Footer>
        </div>
    );
}

export default App;
