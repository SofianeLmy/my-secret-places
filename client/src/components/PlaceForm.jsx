import MultipleImageInput from './MultipleImageInput';
import PlaceInputMap from './PlaceInputMap';

let selectedCenter = { lat: 42.8, lng: -8.5 };

const PlaceForm = ({ place, onPlaceChange, onPlaceSubmit, buttonLabel }) => {
  const handlePlaceFormSubmission = (event) => {
    event.preventDefault();
    onPlaceSubmit();
  };

  console.log(place);

  if (place.position) {
    selectedCenter = {
      lat: place.position.coordinates[1],
      lng: place.position.coordinates[0]
    };
  }

  return (
    <form onSubmit={handlePlaceFormSubmission}>
      <label htmlFor="input-description">
        A short Description of the Place
      </label>
      <textarea
        id="input-description"
        placeholder="A short Description of the Place"
        value={place.description}
        onChange={(event) =>
          onPlaceChange({ ...place, description: event.target.value })
        }
      />

      <PlaceInputMap
        position={place.position}
        onPositionChange={(position) => onPlaceChange({ ...place, position })}
        center={selectedCenter}
      />

      <label>Place Pictures</label>
      <MultipleImageInput
        images={place.pictures}
        onImagesChange={(pictures) => onPlaceChange({ ...place, pictures })}
      />

      <button>{buttonLabel}</button>
    </form>
  );
};

export default PlaceForm;
