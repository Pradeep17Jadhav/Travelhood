import React from 'react';
import './Homepage.css';
import AppBar from "../../Components/AppBar/AppBar"
import UpcomingTreks from '../../Components/UpcomingTreks/UpcomingTreks';
import Holidays from '../../Modules/Holidays/Holidays';
import Footer from '../../Components/Footer/Footer'

export default function Homepage() {
    return (
        <div className="homepage">
            {/* <UnderConstruction /> */}
            <AppBar></AppBar>
            <UpcomingTreks></UpcomingTreks>
            <Holidays></Holidays>
            <Footer></Footer>
        </div>
    );
}