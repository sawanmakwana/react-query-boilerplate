import {Button} from 'antd'
import {GlobalContext} from 'context/global-context'
import MainLayout from 'layout/main-layout'
import {TrendLine} from 'pages/trend-line'
import {Home} from 'pages/home'
import {useContext} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import ProtectedRoute from './protected-route'
import UnprotectedRoute from './unprotected-route'

const AppRoutes = () => {
  const {isLoggedIn} = useContext(GlobalContext)

  return (
    <Switch>
      <MainLayout auth={isLoggedIn}>
        <UnprotectedRoute exact path="/" component={Home} auth={isLoggedIn} />
        <ProtectedRoute exact path="/trends" component={TrendLine} auth={isLoggedIn} />
      </MainLayout>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  )
}

export {AppRoutes}
