import React, { Component } from 'react';
import { string, arrayOf, number, shape, node } from 'prop-types';
import loadScript from '../../helpers/loadScript/loadScript';

const MAP_KEY = 'AIzaSyBTtF0XieZJLhnn456wdszhNlg0VHShLLU';

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
            tagId: `${this.props.id}-script`,
        }).then(this.setupGoogleMap);
    }

    setupGoogleMap = () => {
        const windowWidth = window.innerWidth;
        const { markers } = this.props;

        const center = {
            lat: 54.028017,
            lng: 22.89952,
        };

        const icon = {
            url: '/img/marker.png',
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
                icon,
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
