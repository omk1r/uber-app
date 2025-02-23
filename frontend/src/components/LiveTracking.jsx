import React, { useState, useEffect, useRef } from 'react';
import { LoadScript, GoogleMap } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 19.6016082,
  lng: 75.26832279999999,
};

const LiveTracking = () => {
  const [currentPosition, setCurrentPosition] = useState(center);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });

          if (markerRef.current) {
            markerRef.current.setPosition({ lat: latitude, lng: longitude });
          } else {
            const marker = new window.google.maps.marker.AdvancedMarkerView({
              position: { lat: latitude, lng: longitude },
              map: mapRef.current,
              title: 'Current Location',
            });
            markerRef.current = marker;
          }

          if (mapRef.current) {
            mapRef.current.panTo({ lat: latitude, lng: longitude });
          }
        },
        (error) => console.log(error),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={currentPosition}
        zoom={15}
        onLoad={(map) => {
          mapRef.current = map;
        }}
      />
    </LoadScript>
  );
};

export default LiveTracking;
