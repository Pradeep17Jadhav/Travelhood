import React from 'react';
import Card from '../Card/Card';
import { Typography, Grid } from '@material-ui/core';
import './UpcomingTreks.css';
import arrUpcomingTreks from '../../Resources/data/upcomingTreksData.json';


export default function UpcomingTreks(props) {
    const arrImages = [];
    for (let i = 0; i < arrUpcomingTreks.length; i++) 
    {
        let currImage = arrUpcomingTreks[i].thumbnail;
        arrUpcomingTreks[i]["image"] = require("../../Resources/upcoming_treks/" + currImage).default;
    }


    return (
        <div className="upcomingTreks">
            <h1>
                Upcoming Treks
            </h1>


            <Grid container spacing={3}>
                {arrUpcomingTreks.map(
                    trek => {
                        return (
                            <Grid key = {trek.id} item xs={12} sm={4} md={3}>
                                <Card
                                    title = {trek.title}
                                    location = {trek.location}
                                    date = {trek.date}
                                    duration = {trek.duration}
                                    price = {trek.price}
                                    image={trek.image}
                                ></Card>
                            </Grid>
                        )
                    }
                )}

            </Grid>


        </div>
    )
}