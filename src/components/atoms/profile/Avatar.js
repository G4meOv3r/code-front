import React from 'react'
import PropTypes from 'prop-types'
import { BASE_IMAGE_URL } from '../../../utils/constants'
import classNames from '../../../utils/helpers/classNames'
import '../../../styles/atoms/profile/avatar.css'

function Avatar ({ _id, src, className, ...otherProps }) {
    return (
        <img
            src={src || `${BASE_IMAGE_URL}/avatars/${_id}.png`}
            className={classNames('profile-avatar', className)}
            alt={_id}
            { ...otherProps }
        />
    )
}
Avatar.propTypes = {
    _id: PropTypes.string,
    src: PropTypes.any,
    className: PropTypes.string
}
export default Avatar
