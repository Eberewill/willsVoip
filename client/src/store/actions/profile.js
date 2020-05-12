import axios from 'axios'
import {setAlert} from './alert' 

import{
    GET_PROFILE,
    GET_PROFILES,
    PROFILE_ERRORS,
    UPDATE_PROFILE,
    CLEAR_PROFILE,
    TRANSACTION_SUCCESS,
    TRANSACTION_FAIL
    
    
} from '../actions/constants';
import { Types } from 'mongoose';

//Get Current Users Profile

export const getCurrentProfile = () => async dispatch =>{
    
    try {
        const res = await axios.get('/api/profile/me')

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERRORS,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
};

//get all profile 

export const getProfiles = () => async dispatch =>{
    dispatch({type: CLEAR_PROFILE})
    try {
        const res = await axios.get('/api/profile')-

        dispatch({
            type: GET_PROFILES,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERRORS,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
};

//get profile By ID 

export const getProfileById = userId => async dispatch =>{
    
    try {
        const res = await axios.get(`/api/profile/${userId}`)

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERRORS,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
};


//Create or update Profile

export const createProfile = (FormData,
     history,
      edit = false
      ) => async dispatch =>{
    try {
        const config = {
            headers: {
                'Content-Types': 'application/json'
            }
        }
        const res = await axios.post('/api/profile', FormData, config)

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
        dispatch(setAlert(edit? 'Profile Updated': 'Profile Created', 'success'));

        if(!edit) {
            history.push('/dashboard');
        }

    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: PROFILE_ERRORS,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}

   //add contact 
export const addContact =( FormData) =>async dispatch =>{

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
       const res =  await axios.put('/api/profile/contact', FormData, config);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })
        dispatch(setAlert('Contact Created', 'success'))
     
       
    } catch (err) {
        dispatch({
            type: PROFILE_ERRORS,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
        
    }
}

//payment verify

export const verify =(reference) =>async dispatch =>{ 
 
    try {  const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: 'GET',
      
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: 'Bearer sk_test_5a769a944da74a086ebbd5282cada3db3ab26166'

      }
    });

    let data = await response.json()
    let {message, data:{ id, status, amount, paid_at}} = data
    const usefulData = {id, status, amount, paid_at,message}
        dispatch(updateTransaction(usefulData))
     return  usefulData
    
   
  //const config = {
       // headers: {
          //  Authorization: 'Bearer sk_test_5a769a944da74a086ebbd5282cada3db3ab26166'
      //  }
   // }

    
     //  const res =  await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, config);
       
      // dispatch(setAlert(`Payment status ${res.data.status}`, 'success'))

        //alert(`Payment varified ${ data.message}`)
       // dispatch({
           // type: UPDATE_PROFILE,
           // payload: res.data
       // })
        //dispatch(setAlert('Contact Created', 'success'))
       // history.push('/contacts');
       
    } catch (err) {
        alert("error in t10ry catch")
        dispatch({
            type: PROFILE_ERRORS,
            payload: {err}
        })
        
    }
}
 
   
//payment


export const updateTransaction = (Data) =>async dispatch =>{

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
       const res =  await axios.put('/api/profile/ballance', Data, config);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })
        dispatch(setAlert('Transaction updated', 'success'))

       
    } catch (err) {
        dispatch({
            type: PROFILE_ERRORS,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
        
    }
}
 /**
   
export const verifyPayment = (reference) => async dispatch => {
    var paystackSec = "sk_test_5a769a944da74a086ebbd5282cada3db3ab26166";

     try {
        const config = {
            headers : { Authorization: ` Bearer ${[paystackSec]}`,
            'Content-Types': 'application/json'
         }
        }
        const uri = `https://api.paystack.co/transaction/verify/${reference}`;
       
      const res = await axios.get(uri, config);
      const {
        status,
        message,
        data: {
          amount,
          paid_at,
          customer: { email },
        },
      } = res.data;

      dispatch({
        type: TRANSACTION_SUCCESS,
        payload: {status,message,amount,paid_at,email},
       });
       dispatch(udpateAccount(amount, paid_at,status, message,email))
      dispatch(setAlert("Payment successfull", "success"));
      history.push("/dashboard");
    } catch (err) {
      const errors = err.message;
      if (errors) {
        console.error(errors);
        // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }
      dispatch({
        type: TRANSACTION_FAIL,
        payload: { msg: err.response.status, status: err.response.status },
      });
    }
  };

  export const udpateAccount = (amount, paid_at, status, message, email) => async dispatch =>{
      try {
        const config ={
            headers:{
                'Content-Types': 'application/json',
                'x-auth-token' : localStorage.getItem('token')
            }
        }  

       const body = {amount,paid_at,status, message, email};
            

        const res = await axios.post('/api/profile/ballance', body, config)


      } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))

        }dispatch({
            type: TRANSACTION_FAIL,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
      }

  } */

 


//add Experence
/*** 

//add Education
export const addtransaction = (FormData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Types': 'application/json'
            }
        }
        const res = await axios.put('/api/profile/education', FormData, config)

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });
        dispatch(setAlert('Education Added', 'success'));        
            history.push('/dashboard');
        

    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: PROFILE_ERRORS,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}

//Delete  Experience

export const deleteExperience = id => async dispatch => {
     try {
         const res = await axios.delete(`/api/profile/experience/${id}`)

         dispatch({
             type: UPDATE_PROFILE,
             payload: res.data
         }) 
         dispatch(setAlert( 'Experience removed', 'success'));   
  

     } catch (err) {
        
        dispatch({
            type: PROFILE_ERRORS,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}

//Delete an Education

export const deleteEducation = id => async dispatch=>{
    try {
        const res = await axios.delete(`/api/profile/education/${id}`)

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        }) 
        dispatch(setAlert('Education Removed', 'success'));  


    } catch (err) {
        dispatch({
            type: PROFILE_ERRORS,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }   
}

//Delete Account

export const deleteAccount = () => async dispatch=>{
    if(window.confirm('Are you sure you want to do this?')){
        try {
             await axios.delete('/api/profile')
    
            dispatch({type: CLEAR_PROFILE,}) 
            dispatch({type:  ACCOUNT_DELETED})

            dispatch(setAlert('Your Account has been succesfully deleted Removed', 'success'));  
    
    
        } catch (err) {
            dispatch({
                type: PROFILE_ERRORS, 
                payload: {msg: err.response.satus,status: err.response.satus}
            })
        }
    }
}*/
