import React from 'react'
import PropTypes from 'prop-types'
import { validateEmail } from '../../../utils/validators/email'
import TextInput from './Text'

class EmailInput extends React.Component {
    render () {
        const { name, placeholder, value, ...otherProps } = this.props

        return (
            <TextInput
                name={name}
                type={'email'}
                placeholder={placeholder}
                value={value}
                validator={{ content: this.content.bind(this), direction: 'right' }}
                {...otherProps}
            />
        )
    }

    content () {
        return validateEmail(this.props.value)
    }
}
EmailInput.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any
}
export default EmailInput
