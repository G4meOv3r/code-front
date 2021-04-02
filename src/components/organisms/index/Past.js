import React, { useState } from 'react'

import PastContest from '../../molecules/index/Past'

import '../../../styles/organisms/index/past.css'

const PastContests = (props) => {
    const [contests] = useState([{}, {}, {}, {}, {}])
    if (contests.length !== 0) {
        return (
            <div className={'past-contests'}>
                <div className={'past-contests-title'}> ПРОШЕДШИЕ </div>
                <div className={'past-contests-contests'}>
                    { contests.map((value, index) => (<PastContest key={index}/>)) }
                </div>
            </div>
        )
    } else {
        return false
    }
}
export default PastContests
