import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
      </Header>
      <Form size='large' onSubmit={e => onSubmit(e)}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Your Name'
          
          value={name}
         onChange={e => onChange(e)} />
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
          type='email'
          value={email}
          onChange={e => onChange(e)} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value={password}
           onChange={e => onChange(e)}
          />

            <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value={password2}
           onChange={e => onChange(e)}
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an Account? <Link to="/login">Sign In</Link>
      </Message>
    </Grid.Column>
  </Grid>
)

export default LoginForm