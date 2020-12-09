import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'
import Button from './Button'
import Checkbox from './Checkbox'

function Input ({ type, ...otherProps }) {
    const parser = {
        text: <Text type={type} {...otherProps}/>,
        password: <Text type={type} {...otherProps}/>,
        button: <Button {...otherProps}/>,
        checkbox: <Checkbox {...otherProps}/>
    }
    return parser[type]
}
Input.propTypes = {
    type: PropTypes.string
}
export default Input
