import React, { PureComponent } from 'react';
import { importCssPromise, importScriptPromise } from '../project/import-promise';
import withScrollHelper from './withScrollHelper';
import cn from "classnames";
import Button from "./base/forms/Button";


const center = [-0.07748552114208766, 51.52460961142979];

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
                zoom: 14, // starting zoom
            });
            map.scrollZoom.disable();
            new mapboxgl.Marker().setLngLat(center).addTo(map);
        });
    }


    render() {
        return (
            <div className={cn(this.props.className, 'map-container')} id="the-map">
                <div className="map-mask d-none d-sm-block"/>
                <div className="map-overlay flex-column col-9 col-sm-3 ml-5 pr-0 pl-0">
                    <div className="offset-md-6">
                        <h2 className="mb-5 map-overlay__title">Come see us in the middle of London's Silicon Roundabout</h2>
                        <p className="mb-0 text-light">Where to find us</p>
                        <h5>189-190 Shoreditch <br/>High St</h5>
                        <h5>London, E1 6HU</h5>
                    </div>
                </div>
                <div className="map-blender"/>
            </div>
        );
    }
};

export default withScrollHelper(Map);
