import React from 'react';
import './App.css';
import Homepage from "./Pages/Homepage/Homepage"
import Trek from "./Pages/Trek/Trek";
import AppBar from "./Components/AppBar/AppBar"

//app file
function App() {

    return (
        <div className="app">
            {/* <UnderConstruction /> */}
            <AppBar></AppBar>
            {/* <Homepage /> */}
            <Trek />
        </div>
    );
}

export default App;
