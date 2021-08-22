import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import AppBar from "./Components/AppBar/AppBar"
import UpcomingTreks from './Components/UpcomingTreks/UpcomingTreks';
import Holidays from './Components/Holidays/Holidays';
import ContactForm from './Components/ContactForm/ContactForm'

function App() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className="App">
            <AppBar></AppBar>
            <UpcomingTreks></UpcomingTreks>
            <Holidays></Holidays>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <ContactForm open={open} handleClose={handleClose}/>
        </div>
    );
}

export default App;
