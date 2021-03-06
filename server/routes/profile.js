'use strict';

const express = require('express');
const User = require('../models/user');
const Place = require('../models/place');

const routeGuard = require('./../middleware/route-guard');

const router = new express.Router();

router.get('/search', (req, res, next) => {
  const { term } = req.query;
  /*
  MongoDB $regex operator documentation
  https://www.mongodb.com/docs/manual/reference/operator/query/regex/
  */
  User.find({ name: { $regex: new RegExp(term, 'i') } })
    .then((users) => {
      res.json({ profiles: users });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  let user;
  User.findById(id)
    .then((document) => {
      user = document;
      return Place.find({ creator: id });
    })
    .then((places) => {
      res.json({ profile: user, places });
    })
    .catch((error) => {
      next(error);
    });
});

router.patch('/', routeGuard, (req, res, next) => {
  const { name, email, picture, myDescription } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, email, picture, myDescription },
    { new: true }
  )
    .then((user) => {
      res.json({ profile: user });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
