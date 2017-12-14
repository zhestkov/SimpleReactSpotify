import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles.css';

function NotFound() {
    return (
        <div>
            <h4>This page not found. Try again.</h4>
            <Link to='/'>Go to home page</Link>
        </div>
    );
}
export default NotFound;