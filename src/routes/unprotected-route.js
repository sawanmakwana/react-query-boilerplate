import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const UnprotectedRoute = ({component: Component, auth, ...rest}) => (
  <Route {...rest} render={props => (!auth ? <Component {...props} /> : <Redirect to="/trends" />)} />
)

export default UnprotectedRoute
