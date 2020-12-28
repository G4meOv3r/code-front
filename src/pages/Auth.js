import React from 'react'
import AuthForm from '../components/organisms/auth/Form'
import '../styles/pages/auth.css'

class Auth extends React.Component {
    render () {
        const { type } = this.props
        return (
            <div id={'auth-root'}>
                <AuthForm type={type}/>
            </div>
        )
    }
}
export default Auth
