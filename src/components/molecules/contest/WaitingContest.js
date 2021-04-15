import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import TextLink from '../../atoms/text/Link'

import '../../../styles/molecules/contest/waitingcontest.css'

const WaitingContest = ({ _id, name, description, duration, teams, tasksCount, creator }) => {
    return (
        <Link to={`/contest/${_id}`} style={{ color: 'rgb(255, 255, 255)', textDecoration: 'none' }}>
            <article className={'waitingcontest'}>
                <div className={'waitingcontest__name'}> {name} </div>
                <div className={'waitingcontest__description'}> {description} </div>
                <div className={'waitingcontest__details'}>
                    <ul>
                        <li> <b>КОМАНДЫ:</b> <i>{teams.length}</i> </li>
                        <li> <b>ЗАДАЧИ:</b> <i>{tasksCount}</i> </li>
                        <li> <b>ВРЕМЯ:</b> <i>{duration} минут(а)</i> </li>
                        <li> <b>СОЗДАТЕЛЬ:</b> <TextLink to={`/profile/${creator._id}`}> {creator.nickname} </TextLink> </li>
                    </ul>
                </div>
            </article>
        </Link>
    )
}
WaitingContest.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.number,
    teams: PropTypes.array,
    tasksCount: PropTypes.number,
    creator: PropTypes.object
}
export default WaitingContest
