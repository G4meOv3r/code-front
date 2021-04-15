import React from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { inviteToFriends, removeFromFriends } from '../../../../store/actions/profile/friendship'

import Input from '../../../atoms/input/Input'

const Friendship = ({ _id, friendship }) => {
    const dispatch = useDispatch()
    const friendshipParser = {
        0: false,
        1: <Input type={'button'} value={'+ Добавить в друзья'} className={'profile-personal-action'} onClick={() => { dispatch(inviteToFriends(_id)) }}/>,
        2: <Input type={'button'} value={'- Отменить заявку'} className={'profile-personal-action'} styleType={'negative'} onClick={() => { dispatch(removeFromFriends(_id)) }}/>,
        3: <Input type={'button'} value={'+ Ответить на заявку'} className={'profile-personal-action'} onClick={() => { dispatch(inviteToFriends(_id)) }}/>,
        4: <Input type={'button'} value={'- Удалить из друзей'} className={'profile-personal-action'} styleType={'negative'} onClick={() => { dispatch(removeFromFriends(_id)) }}/>
    }
    return friendshipParser[friendship]
}

Friendship.propTypes = {
    _id: PropTypes.string,
    friendship: PropTypes.number
}
export default Friendship
