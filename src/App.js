import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Auth from './pages/Auth'

class App extends React.Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route path='/auth' component={Auth}/>
                </Switch>
            </Router>
        )
    }
}
export default App
