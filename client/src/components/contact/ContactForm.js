import React, { useState } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addContact} from '../../store/actions/profile'


import { Button,  Form } from 'semantic-ui-react'

const ContactForm = ({addContact}) => {
   const[formData, setFormData] = useState({
    name : '',
     phone : ''
   })

   const {name, phone} = formData;

   const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

 const onSubmit = e => {
  e.preventDefault();
        addContact(formData)
 }


    return (
        <div>
            <Form onSubmit={ e => onSubmit(e)}>
    <Form.Field>
      <label>Contact Name</label>
      <input placeholder='First & Last Name' 
      name="name"
      value={name}
      onChange={e => onChange(e)}
      />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Phone Number' 
      name="phone"
      value={phone}
      onChange={e => onChange(e)}/>
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>

        </div>
    );
    

};ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired
}

export default connect(null, {addContact}) (ContactForm);
