import { Marker } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import GenericMap from './GenericMap';

const PlaceInputMap = ({position, onPositionChange}) => {

    const handlePlaceLocationSetting = () ={

    };
    const navigate = useNavigate();
  return (
    <GenericMap onClick={handlePlaceLocationSetting}>




    </GenericMap>
  )
}

export default PlaceInputMap;