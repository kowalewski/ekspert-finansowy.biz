import React, { Component } from 'react';
import { string, arrayOf, number, shape, node } from 'prop-types';
import loadScript from '../../helpers/loadScript/loadScript';
import markerIcon from '../../img/marker.png';

const MAP_KEY = 'AIzaSyDfWF1sQyycCMnPP8EHxryA1mSIDjaZhp8';

export default class GoogleMap extends Component {
    static propTypes = {
        id: string.isRequired,
        children: node,
        markers: arrayOf(
            shape({
                lat: number,
                lang: number,
            })
        ),
    };

    componentDidMount() {
        loadScript({
            url: `https://maps.googleapis.com/maps/api/js?key=${MAP_KEY}`,
            id: `${this.props.id}-script`,
        }).then(this.setupGoogleMap);
    }

    setupGoogleMap = () => {
        const windowWidth = window.innerWidth;
        const { markers } = this.props;

        const center = {
            lat: 54.028017,
            lng: 22.89952,
        };

        // eslint-disable-next-line
        const map = new google.maps.Map(
            document.getElementById(this.props.id),
            {
                center,
                zoom: windowWidth > 600 ? 10 : 8,
            }
        );

        markers.map(marker => {
            // eslint-disable-next-line
            return new google.maps.Marker({
                map,
                position: marker,
                icon: {
                    url: markerIcon,
                },
            });
        });
    };

    render() {
        const { id, children } = this.props;

        return (
            <div className="map__container">
                <div id={id} className="map" />
                {children}
            </div>
        );
    }
}
