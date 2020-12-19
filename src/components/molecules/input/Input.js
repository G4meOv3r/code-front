import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'
import Button from './Button'
import Checkbox from './Checkbox'
import Email from './Email'
import Password from './Password'
import Repeat from './Repeat'
import Submit from './Submit'

function Input ({ type, ...otherProps }) {
    const parser = {
        text: <Text type={type} {...otherProps}/>,
        button: <Button {...otherProps}/>,
        checkbox: <Checkbox {...otherProps}/>,
        email: <Email {...otherProps} />,
        password: <Password {...otherProps} />,
        repeat: <Repeat {...otherProps} />,
        submit: <Submit {...otherProps} />
    }
    return parser[type]
}
Input.propTypes = {
    type: PropTypes.string
}
export default Input
