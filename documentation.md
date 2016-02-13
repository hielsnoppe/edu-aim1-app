# Technical documentation
## General architecture

### Templates

Templates are the `.html` files used as views by our applications. They display the inputs for the user and the content of the root service's JSON in a more formal manner. We have standard templates (real webpages) and modals (displayed on top of the current template).

Every standard template has a controller to display and react to user's inputs.

### Controllers
The controller takes care to parse the JSON in the services (acting as models) and sending it to the templates in order to display activities and filters.

### Services
Service act as a model, they store the logic for data retrieval and sending. They are updated by the controllers and act as singletons, meaning that only one type of service will be used at a time.

In the context of our project we only use one service: the root service (`root-serv.js`) that stores the activities JSON.

## Project structure

### Plan
The plan is the first screen of our application, asking for a location and a time to start the activities.
- `plan-ctrl.js`: The controller get the available activities, initialize the data and provide it to the template.
- `plan.html`: Show the activities selected and the inputs to know when the user wants to start and where.
- `activityModal.html`: Show the available activities for the user, using the ones he/she already selected.

### Activity
Activity displays all the filters selected and available for the activity. The user can add, update or select filters.
- `activity-ctrl.js`: Retrieves all the parameters of the activity and display them. Handles adding and deleting filters.
- `activity.html`: Displays the data given by the controller.
- `filterModal.html`: Displays the filters available for a given activity using the filters already selected.

### Filter
Three types of filters exist depending on which inputs we want to display:
- 1For1: The filter is a boolean, we do not display a filter page for them.
- 1ForAll: The filter only asks for one possibility (e.g. the rating is only "1 or higher", "2 or higher"..)
- AllForAll: The filter can have multiple values from the possibilities offered, e.g. the genres of a movie.

We have only the controller `filter-ctrl.js` and the template `filter.html` for the filter, working as for plan and activities.

### Result
