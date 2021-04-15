import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/helpers/classNames'
import '../../../styles/atoms/profile/nickname.css'

function Nickname ({ me, nickname, className, ...otherProps }) {
    return (
        <div className={classNames('profile-nickname-wrapper', className)}>
            <div
                className={'profile-nickname'}
                {...otherProps}
            >
                {nickname}
            </div>
            { me ? '(Вы)' : false }
        </div>
    )
}
Nickname.propTypes = {
    me: PropTypes.bool,
    nickname: PropTypes.string,
    className: PropTypes.string
}
export default Nickname
