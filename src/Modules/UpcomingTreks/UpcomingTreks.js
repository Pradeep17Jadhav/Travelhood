import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import { Grid } from "@material-ui/core";
import "./UpcomingTreks.css";
import arrUpcomingTreks from "../../Resources/data/upcomingTreksData.json";
import axios from "axios";

export default function UpcomingTreks(props) {
    const arrImages = [];

    const [arrUpcomingTreks, setArrUpcomingTreks] = useState([]);

    useEffect(() => {
        axios.get("/getTrek").then((response) => {
            console.log(response.data);
            setArrUpcomingTreks(response.data);
        });
    }, []);

    if (!arrUpcomingTreks) return null;

    return (
        <div className="upcomingTreks">
            <h1>Upcoming Treks</h1>

            <Grid container spacing={3}>
                {arrUpcomingTreks.map((trek) => {
                    return (
                        <Grid key={trek.id} item xs={12} sm={4} md={3}>
                            <Card
                                name={trek.name}
                                location={trek.location}
                                date={trek.date}
                                duration={trek.duration}
                                price={trek.price}
                                thumbnailUrl={trek.thumbnailUrl}
                            ></Card>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}
