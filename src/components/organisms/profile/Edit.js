import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Redirect } from 'react-router-dom'

import ProfilePersonal from '../../molecules/profile/large/Personal'
import {useDispatch, useSelector} from 'react-redux'

import { changeProfile } from '../../../store/actions/profile/changeProfile'
import SmallProfile from '../../molecules/profile/small/Profile'
import TextLink from '../../atoms/text/Link'

import Form from '../../molecules/forms/Form'
import Input from '../../atoms/input/Input'
import Avatar from 'react-avatar-edit'
import '../../../styles/organisms/profile/edit.css'

const EditProfile = ({ profile }) => {
    const dispatch = useDispatch()
    const [avatar, setAvatar] = useState(null)
    const [nickname, setNickname] = useState(profile.nickname)
    const [name, setName] = useState(profile.name)
    const [lastName, setLastName] = useState(profile.lastName)
    const change = useSelector(store => store.profile.change)
    return (
        change.success
            ? <Redirect to={`/profile/${profile._id}`}/>
            : <Form className={'edit-profile'} name={'profile-change'}>
                <section className={'edit-profile__header'}>
                    <TextLink to={`/profile/${profile._id}`} style={{ display: 'flex', alignSelf: 'flex-start' }}> ← Профиль </TextLink>
                    <h1> НАСТРОЙКА ПРОФИЛЯ </h1>
                </section>
                <section className={'edit-profile__content'}>
                    <div className={'edit-profile__content__preview'}>
                        <div style={{ marginBottom: '10px', alignSelf: 'flex-start' }}>
                            <ProfilePersonal {...{ ...profile, avatar, nickname, name, lastName }}/>
                        </div>
                        <div style={{ marginBottom: '10px', alignSelf: 'flex-start' }}>
                            <SmallProfile {...{ ...profile, avatar, nickname, name, lastName }}/>
                        </div>
                    </div>
                    <Input type={'text'} name={'nickname'} placeholder={'Никнейм'} value={nickname} onChange={(e) => { setNickname(e.target.value) }}/>
                    <Input type={'text'} name={'name'} placeholder={'Имя'} value={name} onChange={(e) => { setName(e.target.value) }}/>
                    <Input type={'text'} name={'lastName'} placeholder={'Фамилия'} value={lastName} onChange={(e) => { setLastName(e.target.value) }}/>
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '10px 0', alignItems: 'center' }}>
                        <Avatar
                            label={'Выберите файл'}
                            labelStyle={{ display: 'flex', justifyContent: 'center', color: 'rgb(255, 255, 255)' }}
                            width={200}
                            height={200}
                            onCrop={preview => { setAvatar(preview) }}
                            onClose={() => { setAvatar(null) }}
                            borderStyle={{ border: '1px solid rgb(90, 120, 170)', borderRadius: '5px' }}
                            src={avatar}
                        />
                    </div>
                </section>
                <Input type={'button'} value={'Отправить'} onClick={() => { dispatch(changeProfile(avatar, nickname, name, lastName)) }}/>
            </Form>
    )
}
EditProfile.propTypes = {
    profile: PropTypes.object
}
export default EditProfile
