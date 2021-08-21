import React, { Fragment } from 'react';
import './AppBar.css'
import logo from '../../Resources/logo/logo_circle.jpg'
import { Link } from '@material-ui/core';

export default function AppBar(props) {
    return (
        <div className="appbar">
            <img className="appbar-logo" src={logo} />
        </div>
    )
}