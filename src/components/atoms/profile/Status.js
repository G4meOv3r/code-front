import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/helpers/classNames'
import '../../../styles/atoms/profile/status.css'

function Status ({ value, className, ...otherProps }) {
    let message = ''
    if (value) {
        message = 'не в сети'
    } else {
        message = 'в сети'
    }
    return (
        <div
            className={classNames('profile-status', value ? false : 'profile-status-online', className)}
            {...otherProps}
        >
            {message}
        </div>
    )
}
Status.propTypes = {
    value: PropTypes.number,
    className: PropTypes.string
}
export default Status
