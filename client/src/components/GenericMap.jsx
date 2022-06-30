import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const GenericMap = ({ children, ...props }) => {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: ''
  });

  return (
    (isLoaded && (
      <GoogleMap
        mapContainerStyle={{ width: '500px', height: '500px' }}
        center={{ lat: 42.8, lng: -8.5 }}
        zoom={10}
        {...props}
      >
        {children}
      </GoogleMap>
    )) || <></>
  );
};

export default GenericMap;
