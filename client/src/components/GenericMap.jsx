import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const GenericMap = ({ children, ...props }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDxPQqy7ovGbO0l2YjeGmKaI8jIvEK3Qfo'
  });

  return (
    (isLoaded && (
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          minHeight: '30rem',
          height: '500px'
        }}
        center={{ lat: 42.8, lng: -8.5 }} //search in the documentation how to make it dynamic
        zoom={10}
        {...props}
      >
        {children}
      </GoogleMap>
    )) || <></>
  );
};

export default GenericMap;
