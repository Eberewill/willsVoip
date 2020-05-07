import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from './components/layout/WelcomePage/Landing'
import Alert from './components/layout/Alert/Alert'
import Footer from "./components/layout/Footer/Footer"
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Dashboard from './components/dashboard/Dashboard'
import CreateProfile from './components/profile/CreateProfile'
import EditProfile from './components/profile/EditProfile'
import PrivateRoute from './components/Routing/PrivateRoute'
import Nav from './components/layout/navBar/Navbar'
import UserProfile from './components/profile/UserProfile'
import FriendInviter from './components/inviteFriend/FriendInviter'
import ProfileBallance from './components/profile/ProfileBallance'
import Buycredit from './components/profile/BuyCredit'

//redux
import {Provider} from 'react-redux';
import store from './store/index'
import { loadUser } from './store/actions/auth'
import setAuthToken from './utils/setAuthToken'



if (localStorage.token){
  setAuthToken(localStorage.token);

}

const App = ()=>{
  useEffect(()=>{
    store.dispatch(loadUser())
  }, [])
  
  return (
    <Provider store={store}>
  <Router>
    <Fragment>
    <Nav/>
    <Route exact path ='/' component= {Landing}/>
    <Alert/>
    <Switch>
 
    
    <Route exact path='/login' component={Login}/>
    <Route exact path='/register' component={Register}/>

   
    <PrivateRoute exact path ='/dashboard' component={Dashboard}/>
    <PrivateRoute exact path ='/createprofile' component={CreateProfile}/>
    <PrivateRoute exact path ='/editprofile' component={EditProfile}/>
    <PrivateRoute exact path ='/userprofile' component={UserProfile}/>
    <PrivateRoute exact path ='/friendinvite' component={FriendInviter}/>
    <PrivateRoute exact path ='/ballance' component={ProfileBallance}/>
    <PrivateRoute exact path ='/buycredit' component={Buycredit}/>

    </Switch>

  <Footer/>
  </Fragment>
  </Router>
  </Provider>
  
)}

export default App
