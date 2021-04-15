import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import '../../../styles/molecules/contest/pastcontest.css'

const PastContest = ({ _id, name, teams, date }) => {
    const score = [
        teams[0].score.reduce((a, b) => a + b),
        teams[1].score.reduce((a, b) => a + b)
    ]
    return (
        <Link to={`/contest/${_id}`} style={{ color: 'rgb(255, 255, 255)', textDecoration: 'none' }}>
            <article className={'pastcontest'}>
                <div className={'pastcontest__name'}>{name}</div>
                <div className={'pastcontest__score'}>
                    {score[0] ? score[0] : '—'}:{score[1] ? score[1] : '—'}
                </div>
                <div className={'pastcontest__date'}>{date}</div>
            </article>
        </Link>
    )
}
PastContest.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    teams: PropTypes.array,
    date: PropTypes.string
}
export default PastContest
