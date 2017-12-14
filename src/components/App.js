import React, { Component } from 'react';
import Nav from '../containers/Nav';
import { Redirect } from 'react-router';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Nav/>
                {this.props.children}
            </div>
        );
    };
}
export default App;