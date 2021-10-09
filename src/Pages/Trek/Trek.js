import React from 'react';
import { Grid } from '@material-ui/core';
import './Trek.css';

export default function Trek(props) {

    const [arrUpcomingTreks, setArrUpcomingTreks] = useState([]);

    useEffect(() => {
        axios.get("/trek/" + props.id).then((response) => {
            console.log(response.data);
            setArrUpcomingTreks(response.data);
        });
    }, []);

    if (!arrUpcomingTreks) return null;

    return (
        <div className="trek">

            <div className="title">
                <div className="left">
                    <h1 className="trek-name"></h1>
                    <div className="location"></div>
                </div>
                <div className="right">
                </div>
            </div>

            <div className="details">
                <Grid container spacing={3}>
                    <Grid key={something} item xs={6} sm={3} md={3}>
                    </Grid>
                    <Grid key={something} item xs={6} sm={3} md={3}>
                    </Grid>
                    <Grid key={something} item xs={6} sm={3} md={3}>
                    </Grid>
                    <Grid key={something} item xs={6} sm={3} md={3}>
                    </Grid>
                </Grid>
            </div>

            <div className="images">
            </div>

            <div className="highlights">
            </div>

            <div className="overview">
            </div>
            
            <div className="itinenary">
            </div>

            <div className="more-details">
                <div className = "trek-info"></div>
                <div className = "things-to-carry"></div>
                <div className = "difficulty"></div>
            </div>

            <div className="trek-map">
            </div>

            

        </div>
    );
}