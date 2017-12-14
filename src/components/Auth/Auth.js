import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.css';

export class Auth extends Component {
    render() {
        return (
            <Link to='/'>You need authorize</Link>
        );
    }
}