import React from 'react'
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home'



const routes = () => (
    <main>

        <Route exact path='/' component={Home}/>
        <Route exact path='/home' component={Home}/>

    </main>
)

export default routes
