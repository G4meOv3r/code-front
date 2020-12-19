import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LargeLogo from '../../atoms/logo/Large'
import Form from '../Form'
import Menu from '../../molecules/menu/Menu'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Input from '../../molecules/input/Input'
import { isSignIn, validateSignIn } from '../../../utils/validators/signin'
import { isSignUp, validateSignUp } from '../../../utils/validators/signup'
import '../../../styles/organisms/auth/form.css'

class AuthForm extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            type: location.pathname.split('/')[2],
            email: '',
            password: '',
            repeat: '',
            remember: false
        }
    }

    render () {
        const { email, password, repeat, remember } = this.state
        return (
            <div className={'auth-form'}>
                <LargeLogo/>

                <Form onChange={this.onChange.bind(this)}>
                    <Router>
                        <Menu>
                            <Link to={'/auth/signin'} onClick={() => { this.setState({ type: 'signin' }) }}> Войти </Link>
                            <Link to={'/auth/signup'} onClick={() => { this.setState({ type: 'signup' }) }}> Зарегистрироваться </Link>
                        </Menu>

                        <div className={'auth-form-center'}>
                            <Switch>
                                <Route path={'/auth/signin'}> <SignIn email={email} password={password} /> </Route>
                                <Route path={'/auth/signup'}> <SignUp email={email} password={password} repeat={repeat} /> </Route>
                            </Switch>
                        </div>

                        <div className={'auth-form-lower'}>
                            <div style={{ transform: 'scale(0.8)' }}> <Input name={'remember'} type={'checkbox'} checked={remember} label={'Запомните меня'}/> </div>
                            <Input
                                type={'submit'}
                                value={'Отправить'}
                                disabled={this.disabled()}
                                disabledCard={{ visible: this.visible(), content: this.content(), direction: 'top' }}
                                errorCard={{ visible: false, content: 'неверная электронная почта или пароль', direction: 'top' }}
                            />
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
            this.setState({ [e.target.name]: e.target.checked })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    disabled () {
        const { type, email, password, repeat } = this.state
        if (type === 'signin') {
            return !isSignIn(email, password)
        } else {
            return !isSignUp(email, password, repeat)
        }
    }

    visible () {
        const { type, email, password, repeat } = this.state
        if (type === 'signin') {
            return !isSignIn(email, password)
        } else {
            return !isSignUp(email, password, repeat)
        }
    }

    content () {
        const { type, email, password, repeat } = this.state
        if (type === 'signin') {
            return validateSignIn(email, password)
        } else {
            return validateSignUp(email, password, repeat)
        }
    }
}
export default AuthForm
