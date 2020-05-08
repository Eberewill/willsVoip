
import{
    TRANSATION_INITIALIZE,
    TRANSACTION_SUCCESS,
    TRANSACTION_FAIL
    } from '../actions/constants'

    const initialState = {
        transaction: null,
        transactions: [],
        loading: true,
        errors:{}
     }

     export default function ( state = initialState, action){
        const {type, payload} = action;


        switch(type){
            case TRANSACTION_SUCCESS:
                return{
                    ...state,
                    transaction: payload,
                    loading: false
                }
            
            case TRANSACTION_FAIL:
                return{
                    ...state,
           error: payload,
           loading: false,
           transaction: null 
                }
                
                default:
                    return state;
        }



        
     }