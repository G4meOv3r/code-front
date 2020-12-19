import React from 'react'
import PropTypes from 'prop-types'
import { validateEmail } from '../../../utils/validators/email'
import Text from './Text'

class Email extends React.Component {
    render () {
        const { name, placeholder, value, ...otherProps } = this.props

        return (
            <Text
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
Email.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string
}
export default Email
