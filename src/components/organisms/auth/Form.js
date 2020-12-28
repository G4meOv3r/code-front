import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { authMapStateToProps, authMapDispatchToProps } from '../../../store/maps/auth'
import LargeLogo from '../../atoms/logo/Large'
import Form from '../../molecules/Form'
import Menu from '../../molecules/menu/Menu'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Input from '../../atoms/input/Input'
import Submit from './Submit'
import '../../../styles/organisms/auth/form.css'

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
            <div className={'auth-form'}>
                <LargeLogo/>

                <Form onChange={this.onChange.bind(this)} onSubmit={this.onSubmit.bind(this)}>
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

                <div className={'auth-form-navigate'}>
                    <Link to={'/index'}> {'Забыли электронную почту или пароль?'} </Link>
                    <Link to={'/index'}> {'← Главная'} </Link>
                </div>
            </div>
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
