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
              'other'
            ]
          },
          {
            'name': 'Restaurant Rating',
            'type': 'integer',
            'minimum': 0,
            'maximum': 5
          },
          {
            'name': 'Price Range',
            'type': 'floatRange',
            'minimum': 0,
            'maximum': 100
          },
          {
            'name': 'Restaurant Type',
            'type': 'string',
            'enum': [
              'Italian',
              'French',
              'Chinese',
              'other'
            ]
          },
          {
            'name': 'Wifi Available',
            'type': 'boolean'
          },
          {
            'name': 'Phone Number',
            'type': 'interger',
            'minimum': 0,
            'maximum': 9999999999
          },
          {
            'name': 'Accepts Reservations',
            'type': 'boolean'
          }
        ]
      },
      {
        'name': 'Movie',
        'description': 'Go to a movie to watch something',
        'properties': [
          {
            'name': 'Movie kind',
            'type': 'string',
            'enum': [
              'Action',
              'Drama',
              'Comedy',
              'other'
            ]
          },
          {
            'name': 'Movie Rating',
            'type': 'integer',
            'minimum': 0,
            'maximum': 5
          },
          {
            'name': 'Price Range',
            'type': 'floatRange',
            'minimum': 0,
            'maximum': 100
          },
          {
            'name': 'Movie Type',
            'type': 'string',
            'enum': [
              'Italian',
              'French',
              'Chinese',
              'other'
            ]
          },
          {
            'name': 'Wifi Available',
            'type': 'boolean'
          },
          {
            'name': 'Phone Number',
            'type': 'interger',
            'minimum': 0,
            'maximum': 9999999999
          },
          {
            'name': 'Accepts Reservations',
            'type': 'boolean'
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
