import React, { Fragment } from 'react';
import './Card.css';
import { Typography } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EventIcon from '@material-ui/icons/Event';

export default function Card(props) {

    let title = "Harishchandragad Trek".toUpperCase();
    let location = "Nashik, Maharashtra";
    let date = "Aug 24, 2021";
    let duration = "1 Day";
    let price = "1400";
    return (
        <div className="card">
            <div className="card-thumbnail">
                <img src={props.image} />
            </div>

            <div className="card-title">
                <Typography variant="subtitle1" gutterBottom>
                    {props.title.toUpperCase()}
                </Typography>
            </div>

            <div className="card-location">
                <LocationOnOutlinedIcon fontSize="small" />&nbsp;
                <Typography variant="caption">
                    {props.location}
                </Typography>
            </div>

            <div className="card-date">
                <EventIcon fontSize="small" />&nbsp;
                <Typography variant="caption">
                    {props.date}
                </Typography>
            </div>

            <div className="card-duration">
                <AccessTimeIcon fontSize="small" />&nbsp;
                <Typography variant="caption">
                    {props.duration}
                </Typography>
            </div>
            
            <div className="card-price">
                <Typography display="inline" variant="caption">
                    from&nbsp;&nbsp;
                </Typography>
                <Typography display="inline" variant="h6" gutterBottom>
                    ₹{props.price}
                </Typography>
            </div>
        </div>
    )
}