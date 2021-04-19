import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { subscribeProfiles, unsubscribeProfiles } from '../store/actions/ws/profiles'
import { getProfiles } from '../store/actions/profile/profiles'

import Loader from 'react-loader-spinner'
import TextLink from '../components/atoms/text/Link'

import Input from '../components/atoms/input/Input'
import SmallProfile from '../components/molecules/profile/small/Profile'
import '../styles/pages/profiles.css'

const ProfilesPage = () => {
    const [request, setRequest] = useState('')
    const { _id, isAuthorized } = useSelector(state => state.auth)
    const { isLoading, profiles } = useSelector(state => state.profile.profiles)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfiles())
    }, [])
    useEffect(() => {
        dispatch(subscribeProfiles())
        return () => {
            dispatch(unsubscribeProfiles())
        }
    }, [])
    return (
        <div className={'profiles-root'}>
            {
                isLoading
                    ? <Loader
                        type="ThreeDots"
                        color="rgb(90, 120, 170)"
                        height={50}
                        width={50}
                        timeout={3000}
                        style={{ justifySelf: 'center' }}
                    />
                    : <div className={'profiles'}>
                        <section className={'profiles__header'}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <TextLink to={'/'}> ← Главная </TextLink>
                                {
                                    isAuthorized
                                        ? <TextLink to={`/profile/${_id}`}> Мой профиль </TextLink>
                                        : false
                                }
                            </div>
                            <h1> ПРОФИЛИ </h1>
                        </section>
                        <Input type={'text'} placeholder={'Поиск'} value={request} onChange={(e) => { setRequest(e.target.value) }}/>
                        <section className={'profiles__content'}>
                            {
                                profiles.filter((profile) => {
                                    return profile.status === 0
                                }).map((profile, index) => {
                                    return <SmallProfile key={index} {...profile}/>
                                })
                            }
                            {
                                profiles.filter((profile) => {
                                    return profile.status === 1
                                }).map((profile, index) => {
                                    return <SmallProfile key={index} {...profile}/>
                                })
                            }
                        </section>
                    </div>
            }
        </div>
    )
}
export default ProfilesPage
