import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './map.css';

export function MapContainer({ coord, ...props }) {

    const [lat, setLat] = useState(coord.latitude);
    const [lng, setLng] = useState(coord.longitude);
    console.log(process.env.API_KEY)

    useEffect(() => {
        setLat(coord.latitude);
        setLng(coord.longitude);
    }, [coord])

    const mapStyles = {
        display: 'flex',
        width: '71%',
        'border-radius': '10px',
        height: '100%'
    };
    return (
        <div className='google-map'>
            <Map 
                google={ props.google }
                zoom={2}
                style={mapStyles}
                initialCenter={
                {
                    lat: lat,
                    lng: lng
                }
                }
            >
                <Marker position={{lat: lat, lng: lng}} />
            </Map>
        </div>
    );
}

export const MapComponent = GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer);