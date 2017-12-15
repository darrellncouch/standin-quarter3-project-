import axios from 'axios';
import * as actionTypes from '../actiontypes/users.actiontypes';

//get all users
 export const getUsers = ()=>{
   return async (dispatch)=>{
     dispatch({type: actionTypes.GET_USERS_PENDING})
     let users = await axios.get('http://localhost:8060/')
     dispatch({
       type: actionTypes.GET_USERS_SUCCESS,
       payload: users
     })
   }
 }

 export const getReviews = (id) =>{
  return async (dispatch)=>{
    dispatch({type: actionTypes.GET_REVIEWS_PENDING})
    let reviews = await axios.get('http://localhost:8060/reviews')
    dispatch({
      type: actionTypes.GET_REVIEWS_SUCCESS,
      payload: reviews
    })
  }
 }

 export const updateAccount = (id, state) =>{
   return async (dispatch)=>{
     dispatch({type: actionTypes.UPDATE_ACCOUNT_PENDING})
     let update = await axios.patch(`http://localhost:8060/user/${id}`, state)
     dispatch({
       type: actionTypes.UPDATE_ACCOUNT_SUCCESS,
       payload: update
     })
   }
 }
