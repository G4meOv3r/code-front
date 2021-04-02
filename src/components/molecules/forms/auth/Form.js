import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { authMapStateToProps, authMapDispatchToProps } from '../../../../store/maps/auth'
import Menu from '../../../molecules/menu/Menu'
import Link from '../../../atoms/text/Link'
import Input from '../../../atoms/input/Input'
import Form from '../Form'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Submit from './Submit'
import '../../../../styles/molecules/forms/auth.css'

class AuthForm extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            type: this.props.type,
            email: '',
            password: '',
            repeat: '',
            remember: false,
            changed: false
        }
    }

    render () {
        const { auth } = this.props
        const { type, email, password, repeat, remember, changed } = this.state
        return (
            <Form
                className={'auth-form'}
                onChange={this.onChange.bind(this)}
                onSubmit={this.onSubmit.bind(this)}
            >
                <Router>
                    <Menu>
                        <Link to={'/auth/signin'} onClick={() => { this.setState({ changed: true, type: 'signin' }) }}> Войти </Link>
                        <Link to={'/auth/signup'} onClick={() => { this.setState({ changed: true, type: 'signup' }) }}> Зарегистрироваться </Link>
                    </Menu>

                    <div className={'auth-form-center'}>
                        <Switch>
                            <Route path={'/auth/signin'}> <SignIn email={email} password={password} /> </Route>
                            <Route path={'/auth/signup'}> <SignUp email={email} password={password} repeat={repeat} /> </Route>
                        </Switch>
                    </div>

                    <div className={'auth-form-lower'}>
                        <div style={{ transform: 'scale(0.8)' }}> <Input name={'remember'} type={'checkbox'} checked={remember} label={'Запомните меня'}/> </div>
                        <Submit type={type} email={email} password={password} repeat={repeat} errors={auth.errors} changed={changed}/>
                    </div>
                </Router>
            </Form>
        )
    }

    onChange (e) {
        if (e.target.type === 'checkbox') {
            this.setState({ changed: true, [e.target.name]: e.target.checked })
        } else {
            this.setState({ changed: true, [e.target.name]: e.target.value })
        }
    }

    onSubmit (e) {
        e.preventDefault()
        const { type, email, password, repeat } = this.state
        this.props.authorize(type, { email, password, repeat })
        this.setState({ changed: false })
    }
}
AuthForm.propTypes = {
    type: PropTypes.string,
    auth: PropTypes.object,
    authorize: PropTypes.func
}
export default connect(
    authMapStateToProps,
    authMapDispatchToProps
)(AuthForm)
