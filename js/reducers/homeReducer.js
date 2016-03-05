/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return assign({}, state, {
 *       stateVariable: action.var
 *   });
 *
 * To add a new reducer, add a file like this to the reducers folder, and
 * add it in the rootReducer.js.
 */

import { BUTTON_CLICK, CHANGE_HEADER, CHANGE_OWNER_NAME, CHANGE_PROJECT_NAME } from '../constants/AppConstants';
import assignToEmpty from '../utils/assign';

const initialState = {
  projectName: 'SSG projectName',
  ownerName: 'SSG ownerName',
  headerName: 'Hej värld headerName',
  buttonName: 1
};

function homeReducer(state = initialState, action) {
  Object.freeze(state); // Don't mutate state directly, always use assign()!
  switch (action.type) {
    case CHANGE_OWNER_NAME:
      return assignToEmpty(state, {
        ownerName: action.name
      });
    case CHANGE_PROJECT_NAME:
      return assignToEmpty(state, {
        projectName: action.name
      });
    case CHANGE_HEADER:
      return assignToEmpty(state, {
       headerName:action.name
     });
  }
}

function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export default counter;
export default homeReducer;
