import React from 'react'
import PropTypes from 'prop-types'
import Auth from '../components/organisms/auth/Auth'
import '../styles/pages/auth.css'

class AuthPage extends React.Component {
    render () {
        const { type } = this.props
        return (
            <div id={'auth-root'}>
                <Auth type={type}/>
            </div>
        )
    }
}
AuthPage.propTypes = {
    type: PropTypes.string
}
export default AuthPage
