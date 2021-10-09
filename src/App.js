import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AppBar from "./Components/AppBar/AppBar"
import UpcomingTreks from './Components/UpcomingTreks/UpcomingTreks';
import Holidays from './Components/Holidays/Holidays';
import Footer from './Components/Footer/Footer'

//app file
function App() {

    return (
//         <Router>
//             <Switch>
//                 <Route exact path="/">
//                     <div className="App">
//                         <AppBar></AppBar>
//                         <UpcomingTreks></UpcomingTreks>
//                         <Holidays></Holidays>
//                         <Footer></Footer>
//                     </div>
//                 </Route>
//                 <Route exact path="/about">
//                     <AppBar></AppBar>
//                 </Route>
//             </Switch>
//         </Router>

            <div className="App">
                <AppBar></AppBar>
                <UpcomingTreks></UpcomingTreks>
                <Holidays></Holidays>
                <Footer></Footer>
            </div>
    );
}

export default App;
