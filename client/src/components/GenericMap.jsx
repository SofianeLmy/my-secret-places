import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import React, { useState, useEffect } from 'react';

const defaultCenter = { lat: 42.8, lng: -8.5 };

const defaultZoom = 3;

const GenericMap = ({ children, ...props }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  return (
    (isLoaded && (
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          minHeight: '30rem',
          height: '500px'
        }}
        center={props.center || defaultCenter}
        zoom={props.zoom || defaultZoom}
        {...props}
      >
        {children}
      </GoogleMap>
    )) || <></>
  );
};

export default GenericMap;
