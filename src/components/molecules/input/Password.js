import React from 'react'
import PropTypes from 'prop-types'
import { validatePassword } from '../../../utils/validators/password'
import Text from './Text'

class Password extends React.Component {
    render () {
        const { name, placeholder, value, ...otherProps } = this.props

        return (
            <Text
                name={name}
                type={'password'}
                placeholder={placeholder}
                value={value}
                validator={{ content: this.content.bind(this), direction: 'right' }}
                {...otherProps}
            />
        )
    }

    content () {
        return validatePassword(this.props.value)
    }
}
Password.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string
}
export default Password
