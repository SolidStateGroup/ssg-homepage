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
            style: 'mapbox://styles/amoff111/ck5id9r4n0xk01inw3zpmxx4v',
            center, // starting position [lng, lat]
            zoom: 15, // starting zoom
        });
        map.scrollZoom.disable();
        new mapboxgl.Marker().setLngLat(center).addTo(map);
    }

    render() {
        return (
            <div className="map-container" id="the-map">
                <div className="map-blender"/>
            </div>
        );
    }
};

export default Map;
