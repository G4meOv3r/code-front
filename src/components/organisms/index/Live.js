import React, { useState } from 'react'

import LiveContest from '../../molecules/index/Live'

import '../../../styles/organisms/index/live.css'

const LiveContests = (props) => {
    const [contests] = useState([{}, {}, {}])
    if (contests.length !== 0) {
        return (
            <div className={'live-contests'}>
                <div className={'live-contests-title'}> ПРЯМО СЕЙЧАС </div>
                <div className={'live-contests-contests'}>
                    { contests.map((value, index) => (<LiveContest key={index}/>)) }
                </div>
            </div>
        )
    } else {
        return false
    }
}
export default LiveContests
