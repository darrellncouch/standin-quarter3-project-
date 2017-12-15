import * as actionTypes from '../actiontypes/users.actiontypes';

export default (state =[], action)=>{

  switch(action.type){

    case actionTypes.GET_REVIEWS_PENDING:
      return state;
    case actionTypes.GET_REVIEWS_SUCCESS:
      return [...action.payload.data];

    default:
      return state;

  }
}
