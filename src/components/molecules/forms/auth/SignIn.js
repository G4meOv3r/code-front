import React from 'react'
import PropTypes from 'prop-types'
import Input from '../../../atoms/input/Input'

function SignIn ({ email, password }) {
    return (
        <>
            <Input name={'email'} type={'email'} placeholder={'Электронная почта'} value={email} />
            <Input name={'password'} type={'password'} placeholder={'Пароль'} value={password} />
        </>
    )
}
SignIn.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string
}
export default SignIn
