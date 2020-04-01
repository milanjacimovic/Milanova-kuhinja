import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {isLoggedIn } from '../services/Authentication'


const PrivateRoute = ({component: Component, path})=>{
   
return (
    <Route path={path} >
        {isLoggedIn()? <Component path={path}/>: <Redirect to exact ="/about"/>}
    </Route>
)
}

export default PrivateRoute