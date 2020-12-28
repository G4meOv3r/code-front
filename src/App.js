import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { authMapStateToProps } from './store/maps/auth'
import Auth from './pages/Auth'
import Index from './pages/Index'

class App extends React.Component {
    render () {
        const { auth } = this.props
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Index} />

                    <Route exact path='/auth/signin'> { auth.isAuthorized ? <Redirect to={'/'}/> : <Auth type={'signin'} /> } </Route>
                    <Route exact path='/auth/signup'> { auth.isAuthorized ? <Redirect to={'/'}/> : <Auth type={'signup'} /> } </Route>
                </Switch>
            </Router>
        )
    }
}
App.propTypes = {
    auth: PropTypes.object
}
export default connect(
    authMapStateToProps
)(App)
