import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/helpers/classNames'
import '../../../styles/atoms/text/header.css'

function Header ({ children, className, ...otherProps }) {
    return (
        <div
            className={classNames('header', className)}
            {...otherProps}
        >
            {children}
        </div>
    )
}
Header.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}
export default Header
