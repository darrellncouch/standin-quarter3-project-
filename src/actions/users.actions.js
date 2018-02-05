import axios from 'axios';
import * as actionTypes from '../actiontypes/users.actiontypes';

//get all users
 export const getUsers = ()=>{
   return async (dispatch)=>{
     dispatch({type: actionTypes.GET_USERS_PENDING})
     let users = await axios.get('https://standin-backend.herokuapp.com/')
     dispatch({
       type: actionTypes.GET_USERS_SUCCESS,
       payload: users
     })
   }
 }

 export const getReviews = (id) =>{
  return async (dispatch)=>{
    dispatch({type: actionTypes.GET_REVIEWS_PENDING})
    let reviews = await axios.get('https://standin-backend.herokuapp.com/reviews')
    dispatch({
      type: actionTypes.GET_REVIEWS_SUCCESS,
      payload: reviews
    })
  }
 }

 export const updateAccount = (id, state) =>{
   return async (dispatch)=>{
     dispatch({type: actionTypes.UPDATE_ACCOUNT_PENDING})
     let update = await axios.patch(`https://standin-backend.herokuapp.com/user/${id}`, state)
     dispatch({
       type: actionTypes.UPDATE_ACCOUNT_SUCCESS,
       payload: update
     })
   }
 }

 export const createAccount = (state) =>{
   return async (dispatch)=>{
     dispatch({type: actionTypes.CREATE_ACCOUNT_PENDING})
     let newUser = await axios.post('https://standin-backend.herokuapp.com/new-user', state)
     dispatch({
       type: actionTypes.CREATE_ACCOUNT_SUCCESS,
       payload: newUser
     })
   }
 }

 export const deleteAccount = (id) =>{
   return async(dispatch)=>{
     dispatch({type: actionTypes.DELETE_ACCOUNT_PENDING})
     let del = await axios.delete(`https://standin-backend.herokuapp.com/user/${id}`)
     dispatch({
       type: actionTypes.DELETE_ACCOUNT_SUCCESS,
       payload: del
     })
   }
 }
