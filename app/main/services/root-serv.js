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
                    choices: [
                        { text: 'Action', value: false },
                        { text: 'Comedy', value: true },
                        { text: 'Drama', value: true },
                        { text: 'Horror', value: false}
                    ]
                }]};
                break;
                case 'Theatre':
                this.activities['Theatre'] = {
                    filtersSelected: [],
                    filtersAvailable: [{
                        name: 'Genre',
                        class: 'AllForAll',
                        choices: [
                            { text: 'Action', value: false },
                            { text: 'Comedy', value: true },
                            { text: 'Drama', value: true },
                            { text: 'Horror', value: false}
                        ]
                    }]};
                case 'Museum':
                    this.activities['Museum'] = {
                        filtersSelected: [],
                        filtersAvailable: [{
                            name: 'Special event',
                            class: '1For1',
                            value: true
                        }]};
                default:
                    break;
                }
            };

            this.getFilter = function (activity, filter) {
                for (var i = 0; i < this.activities[activity].filtersSelected.length; i++) {
                    if (this.activities[activity].filtersSelected[i].name === filter) {
                        return this.activities[activity].filtersSelected[i];
                    }
                }
            };

            this.deleteActivity = function (activity) {
                delete this.activities[activity];
            };

        });
