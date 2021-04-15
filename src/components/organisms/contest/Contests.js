import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { getContests } from '../../../store/actions/contest/getContests'
import { subscribeContests, unsubscribeContests } from '../../../store/actions/ws/contests'

import Loader from 'react-loader-spinner'
import LiveContest from '../../molecules/contest/LiveContest'
import WaitingContest from '../../molecules/contest/WaitingContest'
import PastContest from '../../molecules/contest/PastContest'

import TextLink from '../../atoms/text/Link'
import Input from '../../atoms/input/Input'
import '../../../styles/organisms/contest/contests.css'

const Contests = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getContests())
    }, [])
    useEffect(() => {
        dispatch(subscribeContests())
        return () => {
            dispatch(unsubscribeContests())
        }
    }, [])
    const { contests, isLoading } = useSelector(state => state.contests.contests)
    const live = contests.filter(contest => contest.type === 'live')
    const waiting = contests.filter(contest => contest.type === 'waiting')
    const past = contests.filter(contest => contest.type === 'past')
    return (
        <div className={'contests'}>
            <section className={'contests__header'}>
                <TextLink to={'/'}> ← Главная </TextLink>
                <h1> КОНТЕСТЫ </h1>
                <div className={'contests__header__actions'}>
                    <Input type={'button'} value={'Начать поиск'}/>
                    <TextLink to={'/contest/create'}> Создание контеста </TextLink>
                </div>
            </section>
            {
                isLoading
                    ? <Loader
                        type="ThreeDots"
                        color="rgb(90, 120, 170)"
                        height={50}
                        width={50}
                        timeout={3000}
                        style={{ alignSelf: 'center', justifySelf: 'center' }}
                    />
                    : <div className={'contests__content'}>
                        {
                            live.length !== 0
                                ? <section className={'contests__live'}>
                                    <h1>ПРЯМО СЕЙЧАС</h1>
                                    <div>
                                        {
                                            live.map((contest, index) => {
                                                return <LiveContest key={index} {...contest} />
                                            })
                                        }
                                    </div>
                                </section>
                                : false
                        }
                        {
                            waiting.length !== 0
                                ? <section className={'contests__waiting'}>
                                    <h1>ОЖИДАЮТ НАЧАЛА</h1>
                                    <div>
                                        {
                                            waiting.map((contest, index) => {
                                                return <WaitingContest key={index} {...contest} />
                                            })
                                        }
                                    </div>
                                </section>
                                : false
                        }
                        {
                            past.length !== 0
                                ? <section className={'contests__past'}>
                                    <h1>ПРОШЕДШИЕ</h1>
                                    <div>
                                        {
                                            past.map((contest, index) => {
                                                return <PastContest key={index} {...contest} />
                                            })
                                        }
                                    </div>
                                </section>
                                : false
                        }
                    </div>
            }
        </div>
    )
}
export default Contests
