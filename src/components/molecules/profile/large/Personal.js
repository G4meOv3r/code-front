import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../../../atoms/profile/Avatar'
import Nickname from '../../../atoms/profile/Nickname'
import FullName from '../../../atoms/profile/Fullname'
import Status from '../../../atoms/profile/Status'
import '../../../../styles/molecules/profile/large/personal.css'

class ProfilePersonal extends React.Component {
    render () {
        const { _id, me, avatar, nickname, name, lastName, status, ...otherProps } = this.props
        return (
            <div className={'profile-personal-wrapper'} {...otherProps}>
                <div className={'profile-personal'}>
                    <Avatar _id={_id} src={avatar} className={'profile-personal-avatar'}/>

                    <div className={'profile-personal-names'}>
                        <div className={'profile-personal-nickname-wrapper'}>
                            <Nickname me={me} nickname={nickname} className={'profile-personal-nickname'}/>
                        </div>

                        <div className={'profile-personal-fullName-wrapper'}>
                            { name + lastName ? <FullName fullName={`${lastName} ${name}`} className={'profile-personal-fullName'}/> : false }
                            <Status value={status} className={'profile-personal-status'}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
ProfilePersonal.propTypes = {
    _id: PropTypes.string,
    me: PropTypes.bool,
    avatar: PropTypes.any,
    nickname: PropTypes.string,
    name: PropTypes.string,
    lastName: PropTypes.string,
    awards: PropTypes.array,
    status: PropTypes.number
}
export default ProfilePersonal
