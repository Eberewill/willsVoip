import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {login} from '../../store/actions/auth'

import logo from './logo.png'

const Login = ({ login, isAuthenticated }) => {

   const [formData, setFormData] = useState({
       email: '',
       password: ''
       
   });

   const { email, password} = formData;

   const onChange = e => 
   setFormData({...formData, [e.target.name]: e.target.value});
    
   //handle the form Submit
   const onSubmit =  async e => {
       e.preventDefault();
       login(email, password)
   }
   //redirect if Logged in
   if(isAuthenticated){
     return <Redirect to='/dashboard' />
   }
   
   return (

<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src={logo}/> Log-in to your account
      </Header>
      <Form size='large' onSubmit={e => onSubmit(e)}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
          type='email'
          name="email" 
          value={email}
          onChange={e => onChange(e)} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            name="password"

            placeholder='Password'
            type='password'
            value={password}
           onChange={e => onChange(e)}
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
     new to us? <Link to="/register">Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>

    );
};
login.PropTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
}) 

export default connect(mapStateToProps, {login})(Login);