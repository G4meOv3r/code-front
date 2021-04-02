import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/helpers/classNames'
import '../../../styles/atoms/profile/fullName.css'

function FullName ({ fullName, className, ...otherProps }) {
    return (
        <div
            className={classNames('profile-fullName', className)}
            { ...otherProps }
        >
            {fullName}
        </div>
    )
}
FullName.propTypes = {
    fullName: PropTypes.string,
    className: PropTypes.string
}
export default FullName
