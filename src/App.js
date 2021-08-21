import logo from './logo.svg';
import './App.css';
import AppBar from "./Components/AppBar/AppBar"
import UpcomingTreks from './Components/UpcomingTreks/UpcomingTreks';

function App() {
    return (
        <div className="App">
            <AppBar></AppBar>
            <UpcomingTreks></UpcomingTreks>
        </div>
    );
}

export default App;
