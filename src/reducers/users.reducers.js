import * as actionTypes from '../actiontypes/users.actiontypes';

export default (state = [], action )=>{

  switch(action.type){

    case actionTypes.GET_USERS_PENDING:
      return state;
    case actionTypes.GET_USERS_SUCCESS:
      return [...action.payload.data];

    case actionTypes.UPDATE_ACCOUNT_PENDING:
      return state;
    case actionTypes.UPDATE_ACCOUNT_SUCCESS:
      return [...action.payload.data];

    case actionTypes.CREATE_ACCOUNT_PENDING:
      return state;
    case actionTypes.CREATE_ACCOUNT_SUCCESS:
      return [...action.payload.data];

    case actionTypes.DELETE_ACCOUNT_PENDING:
      return state;
    case actionTypes.DELETE_ACCOUNT_SUCCESS:
      return [...action.payload.data];

    default:
      return state;
  }
}
