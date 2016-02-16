# Technical documentation
## General architecture

### Templates

Templates are the `.html` files used as views by our applications. They display the inputs for the user and the content of the root service's JSON in a more formal manner. We have standard templates (real webpages) and modals (displayed on top of the current template).

Every standard template has a controller to display and react to user's inputs.

### Controllers
The controller takes care to parse the JSON in the services (acting as models) and sending it to the templates in order to display activities and filters.

### Services
Service act as a model, they store the logic for data retrieval and sending. They are updated by the controllers and act as singletons, meaning that only one type of service will be used at a time.

## Project structure

### Plan
The plan is the first screen of our application, asking for a location and a time to start the activities.
- `plan-ctrl.js`: The controller gets the available activities, initialize the data and provide it to the template.
- `plan.html`: Shows the activities selected and the inputs to know when the user wants to start and where.
- `activityModal.html`: Shows the available activities for the user, using the ones he/she already selected.
- `root-serv.js`: The main service storing the activities selected.

### Activity
Activity displays all the filters selected and available for the activity. The user can add, update or select filters.
- `activity-ctrl.js`: Retrieves all the parameters of the activity and display them. Handles adding and deleting filters.
- `activity.html`: Displays the data given by the controller.
- `filterModal.html`: Displays the filters available for a given activity using the filters already selected.
- `activity-serv.js`: Service storing the filters of a specified activity.

### Filter
Filter display the options of a filter depending of its type (`boolean`, `int` or `String`).
- `filter-ctrl.js`: Find the filter that we need to display and its parameters.
- `filter.html`: Displays the filter parameters.
- `filter-serv.js`: Updates the activity when the filter is updated.

### Result
Display a the sresult schedule
- `result-detail-ctrl.js`: Provides the result schedule activities to the template after retrieving from the root service.
- `result-detail.html`: Displays the data given by the controller.
