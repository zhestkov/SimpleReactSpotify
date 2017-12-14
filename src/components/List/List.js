import React, { Component } from 'react';
import './List.css'

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {spotify} = this.props;
        return (
            <div className='list-container'>
                {
                    spotify.data.items && spotify.data.items.map((item, index) =>
                        <div className='list-item' key={index}>

                            <img src={item.images[0].url} alt={item.name} />
                            <p>{ item.name }</p>
                        </div>
                    )
                }
            </div>
        )
    }
}
export default List;