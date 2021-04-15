import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './Text'
import ButtonInput from './Button'
import CheckboxInput from './Checkbox'
import RadioInput from './Radio'
import EmailInput from './Email'
import PasswordInput from './Password'
import RepeatInput from './Repeat'
import SubmitInput from './Submit'
import AwardsInput from './Awards'
import ContestNameInput from './ContestName'
import ContestDurationInput from './ContestDuration'
import ContestTasksCountInput from './ContestTasksCount'

function Input ({ type, ...otherProps }) {
    const parser = {
        awards: <AwardsInput type={type} {...otherProps}/>,
        text: <TextInput type={type} {...otherProps}/>,
        button: <ButtonInput {...otherProps}/>,
        checkbox: <CheckboxInput {...otherProps}/>,
        radio: <RadioInput {...otherProps}/>,
        email: <EmailInput {...otherProps} />,
        password: <PasswordInput {...otherProps} />,
        repeat: <RepeatInput {...otherProps} />,
        submit: <SubmitInput {...otherProps} />,
        contestName: <ContestNameInput {...otherProps} />,
        contestDuration: <ContestDurationInput {...otherProps} />,
        contestTasksCount: <ContestTasksCountInput {...otherProps} />
    }
    return parser[type]
}
Input.propTypes = {
    type: PropTypes.string
}
export default Input
