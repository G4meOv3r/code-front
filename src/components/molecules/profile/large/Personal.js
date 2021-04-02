import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../../../atoms/profile/Avatar'
import Nickname from '../../../atoms/profile/Nickname'
import Awards from '../../../atoms/profile/Awards'
import FullName from '../../../atoms/profile/Fullname'
import Status from '../../../atoms/profile/Status'
import '../../../../styles/molecules/profile/large/personal.css'

class ProfilePersonal extends React.Component {
    render () {
        const { _id, me, nickname, name, lastName, awards, status, ...otherProps } = this.props
        return (
            <div className={'profile-personal-wrapper'} {...otherProps}>
                <div className={'profile-personal'}>
                    <Avatar _id={_id} className={'profile-personal-avatar'}/>

                    <div className={'profile-personal-names'}>
                        <div className={'profile-personal-nickname-wrapper'}>
                            <Nickname nickname={`${nickname} ${me ? '(Вы)' : ''}`} className={'profile-personal-nickname'}/>
                            <Awards awards={awards} className={'profile-personal-award'}/>
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
    nickname: PropTypes.string,
    name: PropTypes.string,
    lastName: PropTypes.string,
    awards: PropTypes.array,
    status: PropTypes.number
}
export default ProfilePersonal
