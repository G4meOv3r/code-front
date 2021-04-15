import React from 'react'

import Contests from '../components/organisms/contest/Contests'

import '../styles/pages/contests.css'

class ContestsPage extends React.Component {
    render () {
        return (
            <div className={'contests-root'}>
                <Contests/>
            </div>
        )
    }
}
export default ContestsPage
