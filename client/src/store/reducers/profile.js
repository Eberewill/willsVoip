import {
    GET_PROFILE, 
    PROFILE_ERRORS,
    CLEAR_PROFILE,
    UPDATE_PROFILE,
    GET_PROFILES,
    GET_TPROFILES
   } from "../actions/constants";

const initialState = {
   profile: null,
   profiles: [],
   loading: true,
   errors:{},
   tprofile: {}
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
   
    
       case GET_PROFILES:
           return{
               ...state,
               profiles: payload,
               loading: false
           }

           case GET_TPROFILES:
            return{
                ...state,
                tprofile: payload,
                loading: false
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