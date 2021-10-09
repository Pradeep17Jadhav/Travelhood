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
                <LocationOnOutlinedIcon fontSize="small" />
                <div className = "caption">
                    {props.location}
                </div>
            </div>

            <div className="card-date">
                <EventIcon fontSize="small" />
                <div className = "caption">
                    {props.date}
                </div>
            </div>

            <div className="card-duration">
                <AccessTimeIcon fontSize="small" />
                <div className = "caption">
                    {props.duration}
                </div>
            </div>

            <div className="card-price">
                <span className = "caption">
                    from
                </span>
                <span className = "price">
                    ₹{props.price}
                </span>
            </div>
        </div>
    )
}