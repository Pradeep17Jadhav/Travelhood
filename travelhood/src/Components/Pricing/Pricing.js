import React from 'react';
import './Pricing.css';

export default function Pricing(props) {

    return (
        <div className="pricing">
            <div>
                <div className="price-box">
                    <div>
                        From
                    </div>
                    <div className="price">
                        ₹ {props.price}
                    </div>
                    <div>
                        Per person
                    </div>
                </div>
            </div>

            <div>
                <div className="next-date">
                    <div>
                        Next Date
                    </div>
                    <div className="date">
                        {props.date}
                    </div>
                </div>
            </div>
        </div>
    )
}