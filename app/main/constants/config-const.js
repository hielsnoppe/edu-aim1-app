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
        'properties': {
          'cuisine': {
            'name': 'Restaurant Cusine',
            'type': 'string',
            'enum': [
              'Italian',
              'French',
              'Chinese',
              'other'
            ]
          },
          'minimumRating': {
            'name': 'Restaurant Rating',
            'type': 'integer',
            'minimum': 0,
            'maximum': 5
          },
          'priceRange': {
            'name': 'Price Range',
            'type': 'floatRange',
            'minimum': 0,
            'maximum': 100
          },
          'restaurantType': {
            'name': 'Restaurant Type',
            'type': 'string',
            'enum': [
              'Italian',
              'French',
              'Chinese',
              'other'
            ]
          },
          'wifiAvailable': {
            'name': 'Wifi Available',
            'type': 'boolean'
          },
          'telephoneNumber': {
            'name': 'Phone Number',
            'type': 'interger',
            'minimum': 0,
            'maximum': 9999999999
          },
          'reservationRequirement': {
            'name': 'Accepts Reservations',
            'type': 'boolean'
          }
        }
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
