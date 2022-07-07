import MultipleImageInput from './MultipleImageInput';
import PlaceInputMap from './PlaceInputMap';
import './PlaceForm.scss';

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
    <div className="large-component">
      <form className="form-component" onSubmit={handlePlaceFormSubmission}>
        <label htmlFor="input-description">Place Description</label>
        <textarea
          id="input-description"
          placeholder="Tell us about your secret place..."
          value={place.description}
          onChange={(event) =>
            onPlaceChange({ ...place, description: event.target.value })
          }
        />
        <div className="add-pictures-component">
          <label >🌴Add pictures of your place</label>
          <MultipleImageInput
            images={place.pictures}
            onImagesChange={(pictures) => onPlaceChange({ ...place, pictures })}
          />
        </div>
        <br />
        <label className="locate-label">Position your place on the Map</label>
        <br />
        <PlaceInputMap
          position={place.position}
          onPositionChange={(position) => onPlaceChange({ ...place, position })}
          center={selectedCenter}
        />
        <br />
        <button>{buttonLabel}</button>
      </form>
    </div>
  );
};

export default PlaceForm;
