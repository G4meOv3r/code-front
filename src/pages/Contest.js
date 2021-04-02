import React from 'react'
import Workspace from '../components/organisms/contest/Workspace'
import '../styles/pages/contest.css'

class ContestPage extends React.Component {
    render () {
        return (
            <div className={'contest-root'}>
                <div className={'contest-menu'}> </div>
                <div style={{ display: 'flex', flexDirection: 'row', flex: '1' }}>
                    <div className={'contest-submenu'}> </div>
                    <Workspace/>
                </div>
            </div>
        )
    }
}
export default ContestPage
