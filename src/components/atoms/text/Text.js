import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/classNames'
import '../../../styles/atoms/text/text.css'

function Text ({ children, className, ...otherProps }) {
    return (
        <div
            className={classNames('text', className)}
            { ...otherProps }
        >
            { children }
        </div>
    )
}
Text.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}
export default Text
