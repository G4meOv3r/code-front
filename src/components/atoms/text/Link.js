import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from '../../../utils/helpers/classNames'
import '../../../styles/atoms/text/link.css'

function TextLink ({ className, ...otherProps }) {
    return (
        <Link className={classNames('text-link', className)} {...otherProps}/>
    )
}
TextLink.propTypes = {
    className: PropTypes.string
}
export default TextLink
