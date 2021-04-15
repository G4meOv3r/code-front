import React from 'react'
import PropTypes from 'prop-types'
import { validateContestTasksCount } from '../../../utils/validators/contest/tasksCount'
import TextInput from './Text'

class ContestTasksCountInput extends React.Component {
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
        return validateContestTasksCount(this.props.value)
    }
}
ContestTasksCountInput.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any
}
export default ContestTasksCountInput
