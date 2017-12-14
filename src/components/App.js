import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>This is common header</h2>
                {this.props.children}
            </div>
        );
    };
}
export default App;