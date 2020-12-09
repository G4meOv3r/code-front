import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/classNames'
import '../../../styles/atoms/text/paragraph.css'

function Paragraph ({ children, className, ...otherProps }) {
    return (
        <div
            className={classNames('paragraph', className)}
            {...otherProps}
        >
            {children}
        </div>
    )
}
Paragraph.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}
export default Paragraph
