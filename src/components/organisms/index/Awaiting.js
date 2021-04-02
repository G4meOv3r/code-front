import React, { useState } from 'react'

import AwaitingContest from '../../molecules/index/Awaiting'

import '../../../styles/organisms/index/awaiting.css'

const AwaitingContests = (props) => {
    const [contests] = useState([{}, {}, {}])
    if (contests.length !== 0) {
        return (
            <div className={'awaiting-contests'}>
                <div className={'awaiting-contests-title'}> ОЖИДАЮТ НАЧАЛА </div>
                <div className={'awaiting-contests-contests'}>
                    { contests.map((value, index) => (<AwaitingContest key={index}/>)) }
                </div>
            </div>
        )
    } else {
        return false
    }
}
export default AwaitingContests
