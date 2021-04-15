import React from 'react'
import PropTypes from 'prop-types'
import { validatePassword } from '../../../utils/validators/password'
import TextInput from './Text'

class PasswordInput extends React.Component {
    render () {
        const { name, placeholder, value, ...otherProps } = this.props

        return (
            <TextInput
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
PasswordInput.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any
}
export default PasswordInput
