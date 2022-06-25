'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        
        position: {
            type: {
              type: String,
              default: 'Point'
            },
            coordinates: [Number]
        },
        creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
          },
          description: {
            type: String,
            maxLength: 5000,
            trim: true
          },
          pictures: [
            {
              type: String
            }
          ]
        },
    

    { timestamps: true }
  );

const Place = mongoose.model('Place', schema);

module.exports = Place;