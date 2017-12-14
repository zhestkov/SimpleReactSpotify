import React, { Component } from 'react';
import './Releases.css';

export class Releases extends Component {

    render() {
        const { spotify } = this.props;
        return (
            <div className='releases-container'>
                {
                    spotify.data.albums && spotify.data.albums.items.map((item, index) =>
                        <div className='release-item' key={index}>

                            {item.images.length > 0 && (
                                <a href={item.external_urls.spotify}><img src={item.images[1].url} /></a>
                            )}
                            <p>{item.name}</p>
                        </div>
                    )
                }
            </div>
        )
    }
}
export default Releases;