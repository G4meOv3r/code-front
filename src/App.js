import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import AuthPage from './pages/Auth'
import IndexPage from './pages/Index'
import ProfilePage from './pages/Profile'
import SearchPage from './pages/Search'
import ContestPage from './pages/Contest'
import { getTicket } from './store/actions/auth/getTicket'

const App = () => {
    const auth = useSelector(store => store.auth)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTicket())
    }, [])

    return (
        <Router>
            <Switch>
                <Route exact path='/'> <IndexPage/> </Route>

                <Route exact path='/auth/signin'> { auth.isAuthorized ? <Redirect to={'/'}/> : <AuthPage type={'signin'} /> } </Route>
                <Route exact path='/auth/signup'> { auth.isAuthorized ? <Redirect to={'/'}/> : <AuthPage type={'signup'} /> } </Route>

                <Route path='/profile' component={ProfilePage}/>

                <Route exact path='/search'> { auth.isAuthorized ? <SearchPage type={'signup'} /> : <Redirect to={'/auth/signin'}/> } </Route>
                <Route path='/contest' component={ContestPage}/>
            </Switch>
        </Router>
    )
}

App.propTypes = {
    auth: PropTypes.object
}
export default App
