import React from 'react';
import './Card.css';
import { Typography } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EventIcon from '@material-ui/icons/Event';

//card file
export default function Card(props) {
    return (
        <div className="card">
            <div className="card-thumbnail">
                <img src={props.image} />
            </div>

            <div className="card-title"> 
                <h4>{props.title.toUpperCase()}</h4>
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