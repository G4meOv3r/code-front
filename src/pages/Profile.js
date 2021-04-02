import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import Profile from '../components/organisms/profile/Profile'
import '../styles/pages/profile.css'

class ProfilePage extends React.Component {
    render () {
        return (
            <div className={'profile-root'}>
                <Switch>
                    <Route path={'/profile/:_id'} render={props => (<Profile key={props.match.params._id} _id={props.match.params._id}/>)}/>
                </Switch>
            </div>
        )
    }
}
ProfilePage.propTypes = {
    history: PropTypes.object
}
export default ProfilePage
