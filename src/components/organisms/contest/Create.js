import React, { useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { getFriends } from '../../../store/actions/profile/friends'
import { createContest } from '../../../store/actions/contest/createContest'

import Form from '../../molecules/forms/Form'
import Input from '../../atoms/input/Input'
import TextLink from '../../atoms/text/Link'
import Submit from './Submit'

import SmallProfile from '../../molecules/profile/small/Profile'
import '../../../styles/organisms/contest/create.css'

const ContestCreate = () => {
    const [changed, setChanged] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [tasksCount, setTasksCount] = useState('')
    const [access, setAccess] = useState(0)
    const [invited, setInvited] = useState([])
    const switcher = {
        name: setName,
        description: setDescription,
        duration: setDuration,
        tasksCount: setTasksCount,
        access: setAccess
    }
    const userId = useSelector(store => store.auth._id)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFriends(userId))
    }, [])
    const friends = useSelector(store => store.profile.friends.data)
    const { _id, errors } = useSelector(store => store.contests.create)
    const history = useHistory()
    if (_id) {
        dispatch({ type: 'CLEAR_CREATE_CONTEST' })
        history.push(`/contest/${_id}`)
    }
    return (
        <Form
            className={'contest-create'}
            onChange={(e) => {
                switcher[e.target.name](
                    e.target.type === 'radio'
                        ? Number.parseInt(document.querySelector(`input[name=${e.target.name}]:checked`).value)
                        : e.target.value)
                setChanged(true)
            }}
            onSubmit={(e) => {
                e.preventDefault()
                setChanged(false)
                dispatch(createContest(name, description, duration, tasksCount, [1, 1], access, invited, userId))
            }}
        >
            <TextLink to={'/contest'} style={{ width: '70px', marginTop: '100px' }}> ← Контесты </TextLink>
            <div className={'contest-create__action'}>
                <h1> СОЗДАТЬ МАТЧ </h1>
                <Submit {...{ name, duration, tasksCount, changed, errors }} />
            </div>
            <h2> ОБЩИЕ НАСТРОЙКИ </h2>
            <div>
                <Input type={'contestName'} placeholder={'Название'} name={'name'} value={name}/>
                <Input type={'text'} placeholder={'Описание'} name={'description'} value={description}/>
                <label> Длительность <Input type={'contestDuration'} style={{ width: '50px' }} name={'duration'} value={duration}/> минут </label>
                <label> Количество задач <Input type={'contestTasksCount'} style={{ width: '30px' }} name={'tasksCount'} value={tasksCount}/> </label>
            </div>
            <h2> НАСТРОЙКИ ПРИВАТНОСТИ </h2>
            <section className={'contest-create__access'}>
                <div style={{ gridColumnStart: '1', gridColumnEnd: '1' }}>
                    <Input type={'radio'} name={'access'} value={0} label={'Доступен всем'} checked={access === 0} />
                </div>
                <div style={{ gridColumnStart: '2', gridColumnEnd: '4' }}>
                    <Input type={'radio'} name={'access'} value={1} label={'Доступен по приглашенниям участников'} checked={access === 1} />
                </div>
                <div style={{ gridColumnStart: '1', gridColumnEnd: '4' }}>
                    <Input type={'radio'} name={'access'} value={2} label={'Доступен только по моим приглашениям'} checked={access === 2} />
                </div>
            </section>
            <h2> ПРИГЛАШЕНИЯ ДЛЯ ДРУЗЕЙ </h2>
            <section className={'contest-create__invite'}>
                {
                    invited.length !== 0 ? <p> Приглашенные пользователи: </p> : false
                }
                <section className={'contest-create__invited'}>
                    {
                        friends.map((friend, index) => {
                            const friendInvited = invited.includes(friend._id)
                            const { _id, nickname, name, lastName, awards, status } = friend
                            if (friendInvited) {
                                return (
                                    <div className={'contest-create__friend'} key={index}>
                                        <Input
                                            type={'button'}
                                            value={'-'}
                                            onClick={() => {
                                                setInvited(invited.filter((id) => {
                                                    return id !== friend._id
                                                }))
                                            }}
                                            styleType={'negative'}
                                        />
                                        <SmallProfile {...{ _id, nickname, name, lastName, awards, status }}/>
                                    </div>
                                )
                            } else {
                                return false
                            }
                        })
                    }
                </section>
                <p> Ваши друзья: </p>
                <section className={'contest-create__friends'}>
                    {
                        friends.map((friend, index) => {
                            const friendInvited = invited.includes(friend._id)
                            const { _id, nickname, name, lastName, awards, status } = friend
                            return (
                                <div className={'contest-create__friend'} key={index}>
                                    <Input
                                        type={'button'}
                                        value={friendInvited ? '-' : '+'}
                                        onClick={() => {
                                            setInvited(
                                                friendInvited
                                                    ? invited.filter((id) => { return id !== friend._id })
                                                    : [...invited, friend._id])
                                        }}
                                        styleType={friendInvited ? 'negative' : 'positive'}
                                    />
                                    <SmallProfile {...{ _id, nickname, name, lastName, awards, status }}/>
                                </div>
                            )
                        })
                    }
                </section>
            </section>
        </Form>
    )
}
export default ContestCreate
