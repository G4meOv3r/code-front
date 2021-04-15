import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from '../../../../utils/helpers/classNames'
import Avatar from '../../../atoms/profile/Avatar'
import Status from '../../../atoms/profile/Status'
import Nickname from '../../../atoms/profile/Nickname'
import '../../../../styles/molecules/profile/small/profile.css'

class SmallProfile extends React.Component {
    render () {
        const { _id, avatar, nickname, name, lastName, status, ...otherProps } = this.props
        return (
            <Link to={`/profile/${_id}`} style={{ color: 'rgb(255, 255, 255)', textDecoration: 'none' }}>
                <div className={classNames('profile-small', status ? false : 'profile-small-online')} {...otherProps}>
                    <Avatar _id={_id} src={avatar} className={'profile-small-avatar'}/>
                    <div className={'profile-small-names'}>
                        <div className={'profile-small-nickname-wrapper'}>
                            <Nickname nickname={nickname} className={'profile-small-nickname'}/>
                        </div>
                        <Status value={status} className={'profile-small-status'}/>
                    </div>
                </div>
            </Link>
        )
    }
}
SmallProfile.propTypes = {
    _id: PropTypes.string,
    avatar: PropTypes.any,
    nickname: PropTypes.string,
    name: PropTypes.string,
    lastName: PropTypes.string,
    status: PropTypes.number
}
export default SmallProfile
