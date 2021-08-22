import logo from './logo.svg';
import './App.css';
import AppBar from "./Components/AppBar/AppBar"
import UpcomingTreks from './Components/UpcomingTreks/UpcomingTreks';
import Holidays from './Components/Holidays/Holidays';

function App() {
    return (
        <div className="App">
            <AppBar></AppBar>
            <UpcomingTreks></UpcomingTreks>
            <Holidays></Holidays>
        </div>
    );
}

export default App;
