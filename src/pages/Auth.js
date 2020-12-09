import React from 'react'
import AuthForm from '../components/organisms/auth/Form'
import '../styles/pages/auth.css'

class Auth extends React.Component {
    render () {
        return (
            <div id={'auth-root'}>
                <AuthForm/>
            </div>
        )
    }
}
export default Auth
