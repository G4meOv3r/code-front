import React from 'react'
import PropTypes from 'prop-types'
import { isSignIn, validateSignIn } from '../../../utils/validators/signin'
import { isSignUp, validateSignUp } from '../../../utils/validators/signup'
import Input from '../../atoms/input/Input'

class Submit extends React.Component {
    render () {
        const { errors, changed } = this.props
        return (
            <Input
                type={'submit'}
                value={'Отправить'}
                disabled={this.disabled()}
                disabledCard={{ visible: this.disabled(), content: this.content(), direction: 'top' }}
                errorCard={{ visible: !changed && errors, content: () => { return errors.message }, direction: 'top' }}
            />
        )
    }

    disabled () {
        const { type, email, password, repeat } = this.props
        if (type === 'signin') {
            return !isSignIn(email, password)
        } else {
            return !isSignUp(email, password, repeat)
        }
    }

    content () {
        const { type, email, password, repeat } = this.props
        if (type === 'signin') {
            return validateSignIn(email, password)
        } else {
            return validateSignUp(email, password, repeat)
        }
    }
}
Submit.propTypes = {
    type: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    repeat: PropTypes.string,
    errors: PropTypes.any,
    changed: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
}
export default Submit
