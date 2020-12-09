import React from 'react'
import PropTypes from 'prop-types'
import Input from '../../molecules/input/Input'

function SignUp ({ email, password, repeat }) {
    return (
        <>
            <Input name={'email'} type={'text'} placeholder={'Электронная почта'} value={email}/>
            <Input name={'password'} type={'password'} placeholder={'Пароль'} value={password}/>
            <Input name={'repeat'} type={'password'} placeholder={'Повторите пароль'} value={repeat}/>
        </>
    )
}
SignUp.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    repeat: PropTypes.string
}
export default SignUp
