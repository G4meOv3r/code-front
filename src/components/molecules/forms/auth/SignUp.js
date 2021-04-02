import React from 'react'
import PropTypes from 'prop-types'
import Input from '../../../atoms/input/Input'

function SignUp ({ email, password, repeat }) {
    return (
        <>
            <Input name={'email'} type={'email'} placeholder={'Электронная почта'} value={email}/>
            <Input name={'password'} type={'password'} placeholder={'Пароль'} value={password}/>
            <Input name={'repeat'} type={'repeat'} placeholder={'Повторите пароль'} value={repeat} password={password}/>
        </>
    )
}
SignUp.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    repeat: PropTypes.string
}
export default SignUp
