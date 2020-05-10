import {ADD_CONTACT,
    GET_CONTACTS,
    CONTACT_ERROR,
    GET_POST
} from './constants'

const initialstate = {
    contacts:[],
    contact: null,
    loading: true,
    error: {}
}

export default function(state = initialstate, action){
    const{type, payload} = action

    switch(type){
        case GET_CONTACTS:
            return{
                ...state,
                constants: payload,
                loading: false
            }
        case ADD_CONTACT:
            return{
                ...state,
                contacts: [payload, ...state.contacts]
            }
        case CONTACT_ERROR:
            return{
                ...state,
                error: payload,
                loading: false
            } 
        case GET_POST:
            return{
               ...state,
               contact: payload,
               loading: false
            }

            default:
                return state;
    }

}