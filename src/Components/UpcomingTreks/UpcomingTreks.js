import React, { Fragment } from 'react';
import Card from '../Card/Card';
import { Typography, Grid, Paper } from '@material-ui/core';
import './UpcomingTreks.css';
import image from '../../Resources/upcoming_treks/trek2.png'


export default function UpcomingTreks(props) {
    let arrUpcomingTreks = [
        {
            id: 0,
            thumbnail: "trek1.png",
            title: "Harishchandra Gadh",
            location: "Nashik, Maharashtra",
            date: "July 11, 2021",
            duration: "1 Day",
            price: "1400"
        },
        {
            id: 1,
            thumbnail: "trek2.png",
            title: "Karnala Fort",
            location: "Panvel, Maharashtra",
            date: "July 24, 2021",
            duration: "1 Day",
            price: "1100"
        },
        {
            id: 2,
            thumbnail: "trek3.png",
            title: "Sandhan Valley",
            location: "Nashik, Maharashtra",
            date: "Aug 8, 2021",
            duration: "2 Days",
            price: "1600"
        },
        {
            id: 3,
            thumbnail: "trek4.png",
            title: "Raigad Fort",
            location: "Raigad, Maharashtra",
            date: "Aug 27, 2021",
            duration: "3 Days",
            price: "2800"
        },
    ];

    const arrImages = [];
    for (let i = 0; i < arrUpcomingTreks.length; i++) 
    {
        let currImage = arrUpcomingTreks[i].thumbnail;
        arrUpcomingTreks[i]["image"] = require("../../Resources/upcoming_treks/" + currImage).default;
    }


    return (
        <div className="upcomingTreks">
            <Typography className="heading" variant="h4">
                Upcoming Treks
            </Typography>


            <Grid container spacing={3}>
                {arrUpcomingTreks.map(
                    trek => {
                        return (
                            <Grid item xs={12} sm={4} md={3}>
                                <Card
                                    key = {trek.id}
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