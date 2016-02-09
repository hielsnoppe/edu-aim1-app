'use strict';
angular.module('main')
  .service('Root', function ($log, $http, Config, $q) {

    this.dataSource = [];
    this.filledInfo = {};
    this.filledInfo.activities = [];
    var dataSourceFetched = false;

    /**
     * Fetch all the possible activities, filters and components from the data sources
     * and save it to dataSource variable
     */
    this.fetchDataSource = function () {
      if (!dataSourceFetched) {
        this.dataSource = Config.ENV.SAMPLE_INPUTS_JSON;
        dataSourceFetched = true;
        $log.log('DataSources have been loaded');
      }

      return $q.resolve(this.dataSource);
    };

    /**
     * uplad all the filled data to the server and get a response
     * uses $http service
     */
    this.uploadInfo = function () {
      // TODO Upload the info into the HTTP service
    };

    /**
     * Set the general data to the filledData
     * @param generalData like start and end location and date
     */
    this.setGeneralData = function (generalData) {
      this.filledInfo.generalData = generalData
    };

  });
