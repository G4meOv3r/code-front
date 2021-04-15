import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import TextLink from '../../atoms/text/Link'

import '../../../styles/molecules/contest/livecontest.css'

const LiveContest = ({ _id, name, teams }) => {
    const [team1, team2] = teams
    const score = [
        team1.score.reduce((a, b) => a + b),
        team2.score.reduce((a, b) => a + b)
    ]
    return (
        <Link to={`/contest/${_id}`} style={{ color: 'rgb(255, 255, 255)', textDecoration: 'none' }}>
            <article className={'livecontest'}>
                <div className={'livecontest__team'}>
                    <div className={'livecontest__team__name'}> {team1.name} </div>
                    <div className={'livecontest__team__members'}>
                        {
                            team1.members.map((member, index) => {
                                return <TextLink to={`/profile/${member._id}`} key={index}> {member.nickname} </TextLink>
                            })
                        }
                    </div>
                </div>
                <div className={'livecontest__details'}>
                    <div className={'livecontest__name'}> {name} </div>
                    <div className={'livecontest__score'}>
                        {score[0] ? score[0] : '—'}:{score[1] ? score[1] : '—'}
                    </div>
                </div>
                <div className={'livecontest__team'}>
                    <div className={'livecontest__team__name'}> {team2.name} </div>
                    <div className={'livecontest__team__members'}>
                        {
                            team2.members.map((member, index) => {
                                return <TextLink to={`/profile/${member._id}`} key={index}> {member.nickname} </TextLink>
                            })
                        }
                    </div>
                </div>
            </article>
        </Link>
    )
}
LiveContest.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    teams: PropTypes.array,
    date: PropTypes.string
}
export default LiveContest
