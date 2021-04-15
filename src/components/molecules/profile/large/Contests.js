import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import Input from '../../../atoms/input/Input'

import '../../../../styles/molecules/profile/large/smallcontest.css'
import '../../../../styles/molecules/profile/large/contests.css'

const SmallContest = ({ contest }) => {
    return (
        <Link to={`/contest/${contest._id}`} style={{ color: 'rgb(255, 255, 255)', textDecoration: 'none' }} className={'smallcontest'}>
            <div className={'smallcontest__name'}>{contest.name}</div>
        </Link>
    )
}
SmallContest.propTypes = {
    contest: PropTypes.array
}

const Contests = ({ contests }) => {
    const [request, setRequest] = useState('')
    return (
        <div style={{ marginTop: '30px' }}>
            <Input name={'search'} type={'text'} placeholder={'Поиск'} value={request} onChange={(e) => { setRequest(e.target.value) }}/>
            <div className={'profile-contests'}>
                {
                    contests.filter((contest) => {
                        return contest.name.toLowerCase().includes(request.toLowerCase())
                    }).map((contest, index) => {
                        return <SmallContest key={index} contest={contest} />
                    })
                }
            </div>
        </div>
    )
}
Contests.propTypes = {
    contests: PropTypes.array
}
export default Contests
