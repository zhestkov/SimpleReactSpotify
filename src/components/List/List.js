import React, { Component } from 'react';
import './styles.css'

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {spotify} = this.props;
        return (
            <div className='list'>
                {
                    spotify.data.items && spotify.data.items.map((item, index) =>
                        <div className='list-Item' key={index}>
                            <p>{ item.name }</p>
                            <img src={item.images[0].url} alt={item.name} />
                        </div>
                    )
                };
            </div>
        )
    }
}
export default List;