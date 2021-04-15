import React from 'react'
import PropTypes from 'prop-types'
import { validateContestDuration } from '../../../utils/validators/contest/duration'
import TextInput from './Text'

class ContestDurationInput extends React.Component {
    render () {
        const { name, placeholder, value, ...otherProps } = this.props

        return (
            <TextInput
                name={name}
                type={'text'}
                placeholder={placeholder}
                value={value}
                validator={{ content: this.content.bind(this), direction: 'right' }}
                {...otherProps}
            />
        )
    }

    content () {
        return validateContestDuration(this.props.value)
    }
}
ContestDurationInput.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any
}
export default ContestDurationInput
