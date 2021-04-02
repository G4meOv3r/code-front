import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../../utils/helpers/classNames'
import Avatar from '../../../atoms/profile/Avatar'
import Status from '../../../atoms/profile/Status'
import Nickname from '../../../atoms/profile/Nickname'
import Awards from '../../../atoms/profile/Awards'
import '../../../../styles/molecules/profile/small/profile.css'

class SmallProfile extends React.Component {
    render () {
        const { _id, nickname, name, lastName, awards, status, ...otherProps } = this.props

        return (
            <div className={classNames('profile-small', status ? false : 'profile-small-online')} {...otherProps}>
                <Avatar _id={_id} className={'profile-small-avatar'}/>
                <div className={'profile-small-names'}>
                    <div className={'profile-small-nickname-wrapper'}>
                        <Nickname nickname={nickname} className={'profile-small-nickname'}/>
                        <Awards awards={awards} className={'profile-small-award'}/>
                    </div>
                    <Status value={status} className={'profile-small-status'}/>
                </div>
            </div>
        )
    }
}
SmallProfile.propTypes = {
    _id: PropTypes.string,
    nickname: PropTypes.string,
    name: PropTypes.string,
    lastName: PropTypes.string,
    awards: PropTypes.array,
    status: PropTypes.number
}
export default SmallProfile
