import React, { PureComponent } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Project from '../common/project';

let mapboxgl;
if (typeof window !== 'undefined') {
    mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = Project.mapbox;
}

const center = [-0.08365, 51.52562];

// Automatically sets relevant head tags for seo, see _app for the remainder tags
const Map = class extends PureComponent {
    static displayName = 'Map';

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: 'the-map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center, // starting position [lng, lat]
            zoom: 15, // starting zoom
        });
        new mapboxgl.Marker().setLngLat(center).addTo(map);
    }

    render() {
        return (
            <div style={{ height: 400 }} id="the-map"/>
        );
    }
};

export default Map;
