import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    profilePersonalMapDispatchToProps,
    profilePersonalMapStateToProps
} from '../../../store/maps/profile/personal'
import ProfilePersonal from '../../molecules/profile/large/Personal'
import Friendship from '../../molecules/profile/large/Friendship'
import Link from '../../atoms/text/Link'
import Menu from '../../molecules/menu/Menu'
import Friends from '../../molecules/profile/large/Friends'
import '../../../styles/organisms/profile/profile.css'

class Profile extends React.Component {
    render () {
        const { _id, personal } = this.props
        return (
            <div key={_id} className={'profile'}>
                <div className={'profile-header'}>
                    <ProfilePersonal _id={_id} me={personal.me} {...personal.data}/>
                    {
                        personal.me
                            ? <div> <Link to={'/profile/edit'} className={'profile-personal-action'}> Редактировать профиль </Link> </div>
                            : <Friendship _id={_id}/>
                    }
                </div>
                <Menu>
                    <Link to={`/profile/${_id}`}> Профиль </Link>
                    <Link to={`/profile/${_id}/awards`}> Награды </Link>
                    <Link to={`/profile/${_id}/competitive`}> Матчи </Link>
                    <Link to={`/profile/${_id}/friends`}> Друзья </Link>
                    <Link to={`/profile/${_id}/education`}> Образование </Link>
                </Menu>
                <Switch>
                    <Route path={'/profile/:_id/friends'} render={props => <Friends _id={_id} {...props}/> }/>
                </Switch>
            </div>
        )
    }

    componentDidMount () {
        this.props.getPersonal(this.props._id)
    }
}
Profile.propTypes = {
    _id: PropTypes.string,
    personal: PropTypes.object,
    getPersonal: PropTypes.func
}
export default connect(
    profilePersonalMapStateToProps,
    profilePersonalMapDispatchToProps
)(withRouter(Profile))
