import React from 'react'
import PropTypes from 'prop-types'
import { validateRepeat } from '../../../utils/validators/repeat'
import Text from './Text'

class Repeat extends React.Component {
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
        return validateRepeat(this.props.value, this.props.password)
    }
}
Repeat.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    password: PropTypes.string
}
export default Repeat
