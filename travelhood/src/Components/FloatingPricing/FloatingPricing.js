import React from 'react';
import './FloatingPricing.css';
import Button from '@material-ui/core/Button';

export default function FloatingPricing(props) {

    return (
        <div className="floatingPricing">
            <div className="price-box">
                <div>
                    From
                </div>
                <div className="price">
                    ₹ {props.price}
                </div>
            </div>

            <div className="next-date">
                <div>
                    Next Date
                </div>
                <div className="date">
                    {props.date}
                </div>
            </div>

            <div className="contact-booking">
                <Button className="button-contact" variant="contained" color="primary" disableElevation>Contact</Button>
            </div>
        </div>
    )
}