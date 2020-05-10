import axios from 'axios'
import {setAlert} from './alert'


import {ADD_CONTACT,
        GET_CONTACTS,
        CONTACT_ERROR
} from './constants'


//get contacts
export const getContacts = () =>async dispatch =>{
    try {
        const res = await axios.get('/api/profile/contact');

        dispatch({
            type: GET_CONTACTS,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type: CONTACT_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
        
    }
}

//add contact 
export const addContact = FormData =>async dispatch =>{

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
       const res =  await axios.post(`/api/profile/contact`, FormData, config);

        dispatch({
            type: ADD_CONTACT,
            payload: res.data
        })
        dispatch(setAlert('Contact Created', 'success'))
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
        
    }
}