import React from 'react'
import PropTypes from 'prop-types'
import { validateRepeat } from '../../../utils/validators/repeat'
import TextInput from './Text'

class RepeatInput extends React.Component {
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
        return validateRepeat(this.props.value, this.props.password)
    }
}
RepeatInput.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    password: PropTypes.string
}
export default RepeatInput
