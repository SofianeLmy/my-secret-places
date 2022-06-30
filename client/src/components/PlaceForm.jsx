const PlaceForm = ({ place, onPlaceChange, onPlaceSubmit, buttonLabel }) => {

    const handlePlaceFormSubmission = (event) => {
        event.preventDefault();
        onPlaceSubmit();
      };

  return <form onSubmit={handlePlaceFormSubmission}>

    <label htmlFor="input-description">A short Description of the Place</label>
    <textarea 
    id="input-description" 
    placeholder="A short Description of the Place" 
    value={place.description}
    onChange={(event)=> onPlaceChange({...place, description: event.target.value})}
    />

<button>{buttonLabel}</button>

  </form>;
};

export default PlaceForm;
