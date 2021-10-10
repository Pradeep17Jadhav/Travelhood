import React from "react";
import "./Card.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import EventIcon from "@material-ui/icons/Event";

//card file
export default function Card(props) {
    return (
        <div className="card">
            <div className="card-thumbnail" onClick={props.onTrekClicked.bind(null, props.id)}>
                <img src={props.thumbnailUrl} alt="Thumbnail"/>
            </div>

            <div className="card-title">
                <h4>{props.name.toUpperCase()}</h4>
            </div>

            <div className="card-location">
                <LocationOnOutlinedIcon fontSize="small" />
                <div className="caption">{props.location}</div>
            </div>

            <div className="card-date">
                <EventIcon fontSize="small" />
                <div className="caption">
                    {new Date(props.date).toUTCString().substring(5, 17)}
                </div>
            </div>

            <div className="card-duration">
                <AccessTimeIcon fontSize="small" />
                <div className="caption">{props.duration} Days</div>
            </div>

            <div className="card-price">
                <span className="caption">from</span>
                <span className="price">₹{props.price}</span>
            </div>
        </div>
    );
}
