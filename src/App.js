import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AuthPage from './pages/Auth'
import IndexPage from './pages/Index'
import ProfilePage from './pages/Profile'
import ContestsPage from './pages/Contests'
import ContestPage from './pages/contest/Contest'
import ContestCreatePage from './pages/contest/Create'
import TasksPage from './pages/Tasks'
import TaskPage from './pages/task/Task'
import ProfilesPage from './pages/Profiles'
import EditProfilePage from './pages/EditProfile'
import PackagePage from './pages/Package'

const App = () => {
    const auth = useSelector(store => store.auth)
    return (
        <Router>
            <Switch>
                <Route exact path='/'> <IndexPage/> </Route>

                <Route exact path='/auth/signin'> { auth.isAuthorized ? <Redirect to={'/'}/> : <AuthPage type={'signin'} /> } </Route>
                <Route exact path='/auth/signup'> { auth.isAuthorized ? <Redirect to={'/'}/> : <AuthPage type={'signup'} /> } </Route>

                <Route exact path='/profile' component={ProfilesPage}/>
                <Route exact path='/profile/edit'> {!auth.isAuthorized ? <Redirect to={'/auth/signin'}/> : <EditProfilePage/>} </Route>
                <Route path='/profile/:profileId' render={() => { return <ProfilePage/> }}/>

                <Route exact path='/contest' component={ContestsPage}/>
                <Route exact path='/contest/create'> { auth.isAuthorized ? <ContestCreatePage/> : <Redirect to={'/auth/signin'} /> } </Route>
                <Route exact path='/contest/:contestId' component={ContestPage}/>

                <Route exact path='/task' component={TasksPage}/>
                <Route exact path='/task/:taskId' component={TaskPage}/>

                <Route exact path='/package/:packageId' component={PackagePage}/>
            </Switch>
        </Router>
    )
}

App.propTypes = {
    auth: PropTypes.object
}
export default App
