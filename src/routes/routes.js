import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import drawerNavigator from './navigator/drawer'
import Connector from '../utils/connector'
import Login from "../scenes/login"
class Routes extends Component {
  componentWillMount() {
    // authentication
    const { actions } = this.props
    actions.authenticate()
  }

  render() {
    const { checked, loggedIn, actions } = this.props
    if (!checked) return <Text>Loading...</Text>

    // TODO: switch router by loggedIn state
    const Router = createAppContainer(drawerNavigator)
    if (loggedIn) {
     // return <Login loginTrue={(state) => { actions.loginAction(state); }} />
       return <Router/>
    } else {

      return <Login loginTrue={(state,userInfo) => {
        actions.loginAction(state);
        actions.saveMe(userInfo)
      }} />
    }


  }
}

const ConnectedRoutes = props => (
  <Connector>
    {
      ({ actions, state: { app: { loggedIn, checked } } }) => (
        <Routes
          checked={checked}
          loggedIn={loggedIn}
          actions={actions.app}
          {...props}
        />
      )
    }
  </Connector>
)

Routes.propTypes = {
  checked: PropTypes.bool,
  loggedIn: PropTypes.bool,
  actions: PropTypes.object,
}

Routes.defaultProps = {
  checked: false,
  loggedIn: false,
  actions: {},
}

export default ConnectedRoutes

