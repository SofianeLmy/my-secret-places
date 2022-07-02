'use strict';

const express = require('express');

const Place = require('./../models/place');
const routeGuard = require('./../middleware/route-guard');

const router = new express.Router();

// - POST - '/place/add' - Add a new place.
router.post('/add', routeGuard, (req, res, next) => {
  const {
    description,
    pictures,
    position
  } = req.body;

  const creator = req.user._id;

  Place.create({
    creator,
    description,
    pictures, 
    position
  })
    .then((place) => {
      res.json({ place });
    })
    .catch((error) => {
      next(error);
    });
});

// - PATCH - '/place/:id' - Allows user to edit place they own.
router.patch('/:id', routeGuard, (req, res, next) => {
  const { id } = req.params;

  const {
    description,
    pictures, 
    position
  } = req.body;

  const creator = req.user._id;

  Place.findOneAndUpdate(
    { _id: id, creator },
    {
      creator,
      description,
      pictures, 
      position
    },
    { new: true }
  )
    .then((place) => {
      res.json({ place });
    })
    .catch((error) => {
      next(error);
    });
});

// - DELETE - '/place/:id' - Allows user to delete one of their place.
router.delete('/:id', routeGuard, (req, res, next) => {
  const { id } = req.params;
  const creator = req.user._id;
  House.findOneAndDelete({ _id: id, creator })
    .then(() => {
      res.json({});
    })
    .catch((error) => {
      next(error);
    });
});

// - GET - '/house/search' - Allows user to search for houses.
router.get('/search', (req, res, next) => {
  const {
    purpose,
    type,
    minimumSize,
    maximumPrice,
    minimumBedrooms,
    lat,
    lng,
    distance // distance around center in degrees, max: 180
  } = req.query;
  House.find({
    purpose,
    type,
    size: { $gte: minimumSize },
    bedrooms: { $gte: minimumBedrooms },
    price: { $lte: maximumPrice }
  })
    .circle('position', { center: [lng, lat], radius: distance })
    .then((houses) => {
      res.json({ houses });
    })
    .catch((error) => {
      next(error);
    });
});

// - GET - '/place/:id' - Loads single place.
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Place.findById(id)
    .populate('creator')
    .then((place) => {
      res.json({ place });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;

// // - GET - '/house/bookmarked' - List all houses an authenticated user has bookmarked.
// router.get('/bookmarked', routeGuard, (req, res, next) => {
//   const userId = req.user._id;
//   Bookmark.find({ user: userId })
//     .populate('house')
//     .then((bookmarks) => {
//       const houses = bookmarks.map((bookmark) => bookmark.house);
//       res.json({ houses });
//     })
//     .catch((error) => {
//       next(error);
//     });
// });

// // - POST - '/house/:id/bookmark' - Set bookmark for this house on this users profile.
// router.post('/:id/bookmark', routeGuard, (req, res, next) => {
//   const { id } = req.params;
//   const userId = req.user._id;
//   /* Avoids creating a duplicate bookmark */
//   Bookmark.findOne({ house: id, user: userId })
//     .then((house) => {
//       if (!house) {
//         return Bookmark.create({ house: id, user: userId });
//       }
//     })
//     .then(() => {
//       res.json({});
//     })
//     .catch((error) => {
//       next(error);
//     });
// });
