import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/helpers/classNames'
import '../../../styles/atoms/profile/nickname.css'

function Nickname ({ nickname, className, ...otherProps }) {
    return (
        <div
            className={classNames('profile-nickname', className)}
            {...otherProps}
        >
            {nickname}
        </div>
    )
}
Nickname.propTypes = {
    nickname: PropTypes.string,
    className: PropTypes.string
}
export default Nickname
