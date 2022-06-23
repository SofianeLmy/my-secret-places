My Secret Places

# Client

## Pages

Home - / - Display map and pictures that are clickable, log in button, search function for names, places etc.

Log In - /log-in - Allows existing user to log-in. If not registered yet, user can click and got to register page.

Register - /register - Allow visitor to create account with name, email, password and profile picture.

Profile - /profile/:id - Visualize users' profile and their places and pictures,
probably making the pin on the map clickable to link to the pictures,
plus links to add place and edit profile.

Profile Edit - /profile/edit - Allows authenticated user to edit their profile and delete profile.

Add Place - /place/add - Allows user to post place with pictures and limited text.

Place Detail - /place/:id - Visualize single place, allows authenticated user to go to the profile page of creator,
creator can click the button to edit the place.

Place Edit - /place/:id/edit - Allows user to edit the place and delete it.

## Services

listAllPlaceData - issues GET to '/' - Shows map with places. ({ places: [] })

listSomePictures - issues GET to '/' - Shows some recently added pictures. ({ pictures: [] })

registerUser - issues POST to '/authentication/sign-up' - Registers new user.

logInUser - issues POST to '/authentication/sign-in' - Authenticates existing user.

signOutUser - issues POST to '/authentication/sign-out' - Signs out user.

loadUserInformation - issues GET to '/authentication/me' - Loads information about authenticated user.

profileSearch - issues GET to '/profile/search' - Allows user to search for other user profiles.

profileLoad - issues GET to '/profile/:id' - Loads single users profile.

profileEdit - issues PATCH to '/profile' - Edit authenticated users profile.

placeSearch - issues GET to '/place/search' - Allows user to search for places.

placeAdd - issues POST to '/place' - Lists a new place.

placeLoad - issues GET to '/place/:id' - Loads single place.

placeEdit - issues PATCH to '/place/:id' - Allows creator to edit place.

# Components

AuthenticationForm.jsx + scss
GenericMap.jsx
PlaceCard.jsx
PlaceCreateForm.jsx
PlaceInputMap.jsx
PlaceMap.jsx (by click on marker you get directed to placeDetailPage)
PlaceSearchForm.jsx
ImageInput.jsx
MultipleImageInput.jsx
Navbar.jsx
ProfileCard.jsx

# Server

## Models

### User

name: String, required, trim
email: String, required, trim, lowercase
passwordHashAndSalt: String, required
picture: String

### Place

picture: String, required, maxNum: 5
position: { type: String, default: 'Point', coordinates: [ Number ] }
creator: ObjectId, ref: 'User', required
description: String, maxLength: 50, trim
createdAt: date (timestamp: true)

### Request Handlers

GET - '/' - Shows map with places. ({ places: [] })

GET - '/' - Shows some recently added pictures. ({ pictures: [] })

POST - '/authentication/sign-up' - Registers new user.

POST - '/authentication/sign-in' - Authenticates existing user.

POST - '/authentication/sign-out' - Signs out user.

GET - '/authentication/me' - Loads information about authenticated user.

GET - '/profile/search' - Allows user to search for other user profiles.

GET - '/profile/:id' - Loads single users profile.

PATCH - '/profile' - Edit authenticated users profile.

GET - '/place/search' - Allows user to search for places.

POST - '/place' - Lists a new place.

GET - '/place/:id' - Loads single place.

PATCH - '/place/:id' - Allows creator to edit place.

# Wishlist

## Like Model

place
userId

# questions

different API: leaflet.com?
