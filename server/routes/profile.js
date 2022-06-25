'use strict';

const express = require('express');
const router = express.Router();
const routeGuard = require('./../middleware/route-guard');

router.get('/search', (req, res, next) => {
  res.json({ type: 'success', data: { title: 'Hello World' } });
});

router.get('/:id/edit', routeGuard, (req, res, next) => {
  res.json({});
});

router.get('/:id', routeGuard, (req, res, next) => {
  res.json({});
});

module.exports = router;
