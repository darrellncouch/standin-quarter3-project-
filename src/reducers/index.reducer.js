import users from './users.reducers';
import reviews from './reviews.reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  users,
  reviews
});

export default rootReducer;
