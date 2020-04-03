import React, { useEffect, useState, Fragment } from 'react';
import './App.css';
import Recipe from './Recipe';
import { APP_ID, APP_KEY } from './AppKey';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom'
import Navbar from './Navbar';
import About from './About';
import { Signin } from './Signin';
import Signup from './Signup';
import Signout from './Signout';
import PublicRoute from './public/PublicRoute';
import WelcomePage from './public/components/WelcomePage';
import PrivateRoute from './private/PrivateRoute';
import Home from './Home'
import { isLoggedIn } from './services/Authentication'
import { useTranslation } from 'react-i18next';
import i18n from './i18next';
import Country from './Country';
import Spoonacular from './IsplanirajObroke';
import Profile from './Profile';


const App = () => {
  const { t, i18n } = useTranslation();
  

  




  return (
    
    <Router>
      <div className="App">
        <div className="spacer">
          &nbsp;
          
         
        </div>

        <Switch>
          <PublicRoute component={WelcomePage} exact path='/' />
          <PublicRoute component={Signin} path='/signin' >
            <Signin t={t}/>
          </PublicRoute>
          <PublicRoute component={Signup} path='/signup' />
          <PublicRoute component={About} path='/about' />

          <PrivateRoute component={Home} path="/home" />
          <PrivateRoute component={Profile} path="/profile"/>
          <PrivateRoute component={Signout} path="/signout" />
          <Route path="*">
            <Navbar />
            <h1>{t('ERROR 404 PAGE NOT FOUND.1')}</h1>
          </Route>




        </Switch>
        <div><Country />
        </div>
      </div>
    </Router>
  )
}

export default App;
