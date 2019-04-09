import React from 'react'
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'


const routes = () => (
    <main>
        <Route exact path='/' component={Users}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/user/:userId' component={UserDetails}/>
        <Route exact path='/userDetails' component={UserDetails}/>

    </main>
)
export default routes
