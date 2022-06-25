'use strict';

const ImageKit = require('imagekit');
const express = require('express');
const Place = require('../models/place');
const User = require('../models/user');

const router = express.Router();

// - GET - / - Lists places and profiles. ({ places: [], profiles: [] })
router.get('/', (req, res, next) => {
  let places;
  Place.find()
    .limit(10)
    .sort({ createdAt: -1 })
    .then((documents) => {
      places = documents;
      return User.find().limit(10).sort({ createdAt: -1 });
    })
    .then((profiles) => {
      res.json({ places, profiles });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/imagekit-authentication', (req, res, next) => {
  const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_API_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_API_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
  });

  const authenticationParameters = imagekit.getAuthenticationParameters();

  res.json(authenticationParameters);
});

module.exports = router;
