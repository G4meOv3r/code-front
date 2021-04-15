import React from 'react'
import PropTypes from 'prop-types'
import { validateContestName } from '../../../utils/validators/contest/name'
import TextInput from './Text'

class ContestNameInput extends React.Component {
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
        return validateContestName(this.props.value)
    }
}
ContestNameInput.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any
}
export default ContestNameInput
