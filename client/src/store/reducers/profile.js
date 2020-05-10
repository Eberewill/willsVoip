import {
    GET_PROFILE, 
    PROFILE_ERRORS,
    CLEAR_PROFILE,
    UPDATE_PROFILE,
    GET_PROFILES,
    TRANSACTION_SUCCESS,
    TRANSACTION_FAIL
   } from "../actions/constants";

const initialState = {
   profile: null,
   transactions: [],
   contacts:[],
   profiles: [],
   loading: true,
   errors:{}
}

export default function ( state = initialState, action){
   const {type, payload} = action;

   switch(type){
       case GET_PROFILE:
       case UPDATE_PROFILE:        
       return{
           ...state,
           profile: payload,
           loading: false
       }
       case TRANSACTION_SUCCESS:
       return{
        ...state,
        transaction: payload,
        UPDATE_PROFILE
    }
       case GET_PROFILES:
           return{
               ...state,
               profiles: payload,
               loading: false
           }
        case TRANSACTION_FAIL:
            return{
                ...state,
                error: payload

            }
           
       case PROFILE_ERRORS:
       return{
           ...state,
           error: payload,
           loading: false,
           profile: null
       };
       case CLEAR_PROFILE:
           return {
               ...state,
               profile: null,
               loading: false
           } 
       default:
           return state;
   }

}