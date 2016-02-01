'use strict';
angular.module('main')
.service('Root', function ($log) {
    this.activities = {};

    this.getActivity = function (activity) {
        return this.activities[activity];
    };

    this.updateActivity = function (activity, data) {
        this.activities[activity] = data;
    };

    this.setCurrentActivity = function (activity) {
        this.currentActivity = activity;
    };

    this.addActivity = function (activity) {
        switch (activity) {
            case 'Cinema':
                this.activities['Cinema'] = {
                        filtersSelected: [],
                        filtersAvailable: [{
                            name: 'Rating',
                            class: '1ForAll',
                            value: '3 or higher',
                            choices: ['1 or higher', '2 or higher', '3 or higher', '4 or higher']
                        },
                        {
                            name: 'Has breaks',
                            class: '1For1',
                            value: true
                        },
                        {
                            name: 'Genre',
                            class: 'AllForAll',
                            values: ['comedy', 'drama'],
                            choices: ['action', 'comedy', 'drama', 'horror']
                        }
                    ]
                    };
                break;
            default:
                break;
        }
    };
    this.deleteActivity = function (activity) {
        delete this.activities[activity];
    };

});
