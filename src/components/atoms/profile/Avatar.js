import React from 'react'
import PropTypes from 'prop-types'
import { BASE_IMAGE_URL } from '../../../utils/constants'
import classNames from '../../../utils/helpers/classNames'
import '../../../styles/atoms/profile/avatar.css'

function Avatar ({ _id, className, ...otherProps }) {
    return (
        <img
            src={`${BASE_IMAGE_URL}/avatars/${_id}.png`}
            className={classNames('profile-avatar', className)}
            alt={_id}
            { ...otherProps }
        />
    )
}
Avatar.propTypes = {
    _id: PropTypes.string,
    className: PropTypes.string
}
export default Avatar
