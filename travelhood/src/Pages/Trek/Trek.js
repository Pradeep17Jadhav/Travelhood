import React, {useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import './Trek.css';
import axios from "axios";

export default function Trek(props) {

    const [trek, setTrek] = useState([]);

    useEffect(() => {
        axios.get("/trek/" + 0).then((response) => {
            setTrek(response.data[0]);
            console.log(response.data[0]);
        });
    }, []);

    if (!trek) return null;

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
                    <Grid key={"1"} item xs={6} sm={3} md={3}>
                    </Grid>
                    <Grid key={"2"} item xs={6} sm={3} md={3}>
                    </Grid>
                    <Grid key={"3"} item xs={6} sm={3} md={3}>
                    </Grid>
                    <Grid key={"4"} item xs={6} sm={3} md={3}>
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