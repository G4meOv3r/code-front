import React from 'react'
import FrameWrapper from '../../molecules/contest/FrameWrapper'
import '../../../styles/organisms/contest/workspace.css'

class Workspace extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            model: [
                ['17236187263', [['2837619827419', '923847298347'], ['8529387928230', '124912837877']]],
                ['23897429859', '2319283769']
            ]
        }
    }

    render () {
        return (
            <div className={'workspace'}>
                <div className={'workspace-menu'}> </div>
                <div className={'workspace-content'} style={{ position: 'relative' }}>
                    <FrameWrapper model={this.state.model} direction={'column'}/>
                </div>
            </div>
        )
    }
}
export default Workspace
