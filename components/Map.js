import React, { PureComponent } from 'react';
import { importCssPromise, importScriptPromise } from '../project/import-promise';


const center = [-0.08365, 51.52562];

// Automatically sets relevant head tags for seo, see _app for the remainder tags
const Map = class extends PureComponent {
    static displayName = 'Map';

    componentDidMount() {
        Promise.all([
            importScriptPromise('https://cdn.jsdelivr.net/npm/mapbox-gl@1.7.0/dist/mapbox-gl.js'),
            importCssPromise('https://cdn.jsdelivr.net/npm/mapbox-gl@1.7.0/dist/mapbox-gl.css'),
        ]).then(() => {
            mapboxgl.accessToken = Project.mapbox;
            const map = new mapboxgl.Map({
                container: 'the-map',
                style: 'mapbox://styles/amoff111/ck5id9r4n0xk01inw3zpmxx4v',
                center, // starting position [lng, lat]
                zoom: 12, // starting zoom
            });
            map.scrollZoom.disable();
            new mapboxgl.Marker().setLngLat(center).addTo(map);
        });
    }


    render() {
        return (
            <div className="map-container" id="the-map">
                <div className="map-mask"/>
                <div className="map-overlay flex-column col-3 ml-5 pr-0">
                    <h2 className="mb-5 map-overlay__title">Come see us in the middle of London's Silicon Roundabout</h2>
                    <p className="mb-0 text-light">Where to find us</p>
                    <h5>86-90 Paul Street</h5>
                    <h5>London, EC2A 4NE</h5>
                </div>
                <div className="map-blender"/>
            </div>
        );
    }
};

export default Map;
