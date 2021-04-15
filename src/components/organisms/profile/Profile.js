import React from 'react'
import PropTypes from 'prop-types'

import { Switch, Route } from 'react-router-dom'

import ProfilePersonal from '../../molecules/profile/large/Personal'
import Friendship from '../../molecules/profile/large/Friendship'
import Link from '../../atoms/text/Link'
import Menu from '../../molecules/menu/Menu'
import Friends from '../../molecules/profile/large/Friends'
import Contests from '../../molecules/profile/large/Contests'

import '../../../styles/organisms/profile/profile.css'

const Profile = ({ profile }) => {
    const { _id, personal, friends, contests } = profile
    return (
        <div key={_id} className={'profile'}>
            <Link style={{ display: 'flex', alignSelf: 'flex-start', marginTop: '10%' }} to={'/profile'}> ← Профили </Link>
            <div className={'profile-header'}>
                <ProfilePersonal _id={_id} {...personal}/>
                {
                    personal.me
                        ? <div> <Link to={'/profile/edit'} className={'profile-personal-action'}> Редактировать профиль </Link> </div>
                        : <Friendship _id={_id} friendship={personal.friendship}/>
                }
            </div>
            <Menu>
                <Link to={`/profile/${_id}/contests`}> Матчи </Link>
                <Link to={`/profile/${_id}/friends`}> Друзья </Link>
            </Menu>
            <Switch>
                <Route path={`/profile/${_id}/contests`}> <Contests contests={contests}/> </Route>
                <Route path={`/profile/${_id}/friends`}> <Friends friends={friends}/> </Route>
            </Switch>
        </div>
    )
}
Profile.propTypes = {
    profile: PropTypes.object
}
export default Profile
