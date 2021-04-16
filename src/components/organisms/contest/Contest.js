import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

import convertTime from '../../../utils/helpers/timer'

import { useDispatch, useSelector } from 'react-redux'
import { getContest } from '../../../store/actions/contest/getContest'
import { startContest } from '../../../store/actions/contest/startContest'
import { subscribeContest, unsubscribeContest } from '../../../store/actions/ws/contest'
import { connectContest } from '../../../store/actions/contest/connectContest'

import Loader from 'react-loader-spinner'
import TextLink from '../../atoms/text/Link'
import Task from '../../molecules/contest/Task'

import Input from '../../atoms/input/Input'
import 'codemirror/theme/material.css'
import '../../../styles/organisms/contest/contest.css'

const ContestTeam = ({ team, isAuthorized, contest }) => {
    const { name, members } = team
    const dispatch = useDispatch()
    return (
        <div className={'contest__team'}>
            <div className={'contest__team__name'}> { name } </div>
            <div className={'contest__team__members'}>
                {
                    members.length
                        ? members.map((member, index) => {
                            return <TextLink key={index} to={`/profile/${member._id}`}> {member.nickname} </TextLink>
                        })
                        : (
                            contest.type === 'waiting'
                                ? (contest.isMember
                                    ? '—'
                                    : (
                                        isAuthorized
                                            ? <Input type={'button'} value={'Присоединиться'} onClick={() => { dispatch(connectContest(contest._id)) }}/>
                                            : <p style={{ textAlign: 'center', fontSize: '15px', margin: 0 }}>
                                                <TextLink to={'/auth/signin'} style={{ display: 'inline' }}>Войдите</TextLink> чтобы принять участие
                                            </p>
                                    ))
                                : false
                        )
                }
            </div>
        </div>
    )
}
ContestTeam.propTypes = {
    team: PropTypes.object,
    isAuthorized: PropTypes.bool,
    contest: PropTypes.object
}

const Contest = () => {
    const { contestId } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getContest(contestId))
    }, [])
    useEffect(() => {
        dispatch(subscribeContest(contestId))
        return () => {
            unsubscribeContest(contestId)
        }
    }, [])
    const contest = useSelector(state => state.contests[contestId])
    const isAuthorized = useSelector(state => state.auth.isAuthorized)
    const [task, setTask] = useState(0)
    const score = contest && !contest.isLoading
        ? [
            contest.teams[0].score.reduce((a, b) => a + b),
            contest.teams[1].score.reduce((a, b) => a + b)
        ]
        : false
    const [flag, setFlag] = useState(false)
    const [remaining, setRemaining] = useState(null)

    if (contest) {
        if (contest.dates) {
            if (contest.dates.end) {
                if (!flag) {
                    setFlag(true)
                    setRemaining((new Date(contest.dates.end)).getTime() - Date.now())
                }
            }
        }
    }

    useEffect(() => {
        if (remaining > 0) {
            const timer = setInterval(() => {
                setRemaining(remaining - 1000)
            }, 1000)
            return () => clearInterval(timer)
        }
    })
    return (
        contest && !contest.isLoading
            ? <div className={'contest'}>
                <div style={{ display: 'flex', marginTop: '10%', justifyContent: 'space-between' }}>
                    <TextLink to={'/contest'}> ← Контесты </TextLink>
                    {
                        contest.type === 'waiting'
                            ? (
                                ((contest.privacy.access === 0) || (contest.privacy.access === 1 && contest.isMember)) && (isAuthorized)
                                    ? <TextLink to={`/contest/${contestId}/invite`}> Пригласить друга </TextLink>
                                    : false
                            )
                            : false
                    }
                </div>
                <section className={'contest__header'}>
                    <h1 style={{ display: 'inline' }}> {contest.name} </h1>
                    <p> {contest.description} </p>
                </section>
                <section className={'contest__status'}>
                    <ContestTeam team={contest.teams[0]} isAuthorized={isAuthorized} contest={contest}/>
                    {
                        contest.type === 'waiting'
                            ? (contest.isCreator
                                ? <div className={'contest__waiting'}>
                                    <p> Вы — <b> создатель контеста. </b> <br/> <i> Начните матч когда все будут готовы! </i> </p>
                                    <Input type={'button'} value={'Начать контест'} onClick={() => {
                                        dispatch(startContest(contestId))
                                    }}/>
                                </div>
                                : <div className={'contest__waiting'}> ОЖИДАЕТ НАЧАЛА </div>
                            )
                            : <div className={'contest__score'}>
                                <div className={'contest__score__total'}>
                                    {score[0] ? score[0] : '—'} : {score[1] ? score[1] : '—'}
                                </div>
                                <div className={'contest__score__detail'}>
                                    {
                                        contest.tasks.map((task, index) => {
                                            return (
                                                <div key={index} className={'contest__score__detail__task'}>
                                                    <div className={'contest__score__detail__task__score'}> {contest.teams[0].score[index] ? contest.teams[0].score[index] : '—'} </div>
                                                    <div className={'contest__score__detail__task__letter'}> {String.fromCharCode(65 + index)} </div>
                                                    <div className={'contest__score__detail__task__score'}> {contest.teams[1].score[index] ? contest.teams[1].score[index] : '—'} </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div style={{ fontSize: '13px', marginTop: '10px' }}>
                                    {
                                        remaining > 0
                                            ? convertTime(Math.ceil(remaining / 1000))
                                            : 'Контест завершен'
                                    }
                                </div>
                            </div>
                    }
                    <ContestTeam team={contest.teams[1]} isAuthorized={isAuthorized} contest={contest}/>
                </section>
                <section className={'contest__tasks'}>
                    <div className={'contest__tasks__menu'}>
                        {
                            contest.tasks.map((_, index) => {
                                return (
                                    <label key={index} className={task === index ? 'active' : null}>
                                        <input
                                            name={'task'}
                                            type={'radio'}
                                            defaultChecked={task === index}
                                            value={index}
                                            onChange={e => { setTask(Number.parseInt(e.target.value)) }}
                                        />
                                        {`Задача ${String.fromCharCode(65 + index)}`}
                                    </label>
                                )
                            })
                        }
                    </div>
                    {
                        contest.isMember
                            ? (
                                contest.type === 'waiting'
                                    ? <div className={'contest__tasks__attention'}>
                                        <p>
                                            <i> Внимание! </i> Представленная задача <b><u>не является</u></b> задачей контеста. Ее решение никак не отразится на счете матча.
                                        </p>
                                    </div>
                                    : (
                                        contest.type === 'past'
                                            ? <div className={'contest__tasks__attention'}>
                                                <p>
                                                    <i> Внимание! </i> <b><u>Контест завершен.</u></b> Вы можете продолжать решать представленные задачи. Это никак не отразится на счете матча.
                                                </p>
                                            </div>
                                            : false
                                    )
                            )
                            : <div className={'contest__tasks__attention'}>
                                <p>
                                    <i> Внимание! </i> Вы <b><u>не являетесь</u></b> участником этого контеста, но можете решать представленные в нем задачи. Это никак не отразится на счете матча.
                                </p>
                            </div>
                    }
                    <Task {...contest.tasks[task]}/>
                </section>
            </div>
            : <Loader
                type="ThreeDots"
                color="rgb(90, 120, 170)"
                height={50}
                width={50}
                timeout={3000}
                style={{ alignSelf: 'center', justifySelf: 'center' }}
            />
    )
}
export default Contest
