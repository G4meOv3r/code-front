import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LargeLogo from '../../atoms/logo/Large'
import Form from '../Form'
import Menu from '../../molecules/menu/Menu'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Input from '../../molecules/input/Input'
import '../../../styles/organisms/auth/form.css'

class AuthForm extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
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
                            <Link to={'/auth/signin'}> Войти </Link>
                            <Link to={'/auth/signup'}> Зарегистрироваться </Link>
                        </Menu>

                        <div className={'auth-form-center'}>
                            <Switch>
                                <Route path={'/auth/signin'}> <SignIn email={email} password={password} /> </Route>
                                <Route path={'/auth/signup'}> <SignUp email={email} password={password} repeat={repeat} /> </Route>
                            </Switch>
                        </div>

                        <div className={'auth-form-lower'}>
                            <div style={{ transform: 'scale(0.8)' }}> <Input name={'remember'} type={'checkbox'} checked={remember} label={'Запомните меня'}/> </div>
                            <Input type={'button'} value={'Отправить'} style={{ width: '110px', height: '35px' }}/>
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
}
export default AuthForm
