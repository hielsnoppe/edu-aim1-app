'use strict';
angular.module('main')
  .constant('Config', {

    // gulp environment: injects environment vars
    ENV: {
      /*inject-env*/
      'SERVER_URL': 'https://DEVSERVER/api',
    'SAMPLE_INPUTS_JSON': [
      {
        'name': 'Restaurant',
        'description': 'Go to a restaurant to eat something',
        'properties': [
          {
            'name': 'Restaurant Cusine',
            'type': 'string',
            'enum': [
              'Italian',
              'French',
              'Chinese',
              'Other'
            ]
          },
          {
            'name': 'Restaurant Rating',
            'type': 'integer',
            'minimum': 0,
            'maximum': 5
          },
          {
            'name': 'Restaurant Type',
            'type': 'string',
            'enum': [
              'meal_takeaway',
              'bar',
              'restaurant',
              'food',
              'night_club',
              'cafe'
            ]
          }
        ]
      },
      {
        'name': 'Movie',
        'description': 'Go to a movie to watch something',
        'properties': [
          {
            'name': 'Genre',
            'type': 'string',
            'enum': [
              'Action',
              'Drama',
              'Comedy',
              'Science Fiction',
              'Horror',
              'Other'
            ]
          },
          {
            'name': 'Movie Rating',
            'type': 'integer',
            'minimum': 0,
            'maximum': 10
          }
        ]
      }
    ]
      /*endinject*/
    },

    // gulp build-vars: injects build vars
    BUILD: {
      /*inject-build*/
      /*endinject*/
    }

  });
