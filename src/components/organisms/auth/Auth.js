import React from 'react'
import PropTypes from 'prop-types'
import Link from '../../atoms/text/Link'
import LargeLogo from '../../atoms/logo/Large'
import AuthForm from '../../molecules/forms/auth/Form'
import '../../../styles/organisms/auth/auth.css'

class Auth extends React.Component {
    render () {
        const { type } = this.props
        return (
            <div className={'auth'}>
                <LargeLogo/>

                <AuthForm type={type}/>

                <div className={'auth-navigate'}>
                    <Link to={'/index'}> {'Забыли электронную почту или пароль?'} </Link>
                    <Link to={'/'}> {'← Главная'} </Link>
                </div>
            </div>
        )
    }
}
Auth.propTypes = {
    type: PropTypes.string
}
export default Auth
