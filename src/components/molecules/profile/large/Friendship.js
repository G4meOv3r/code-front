import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Input from '../../../atoms/input/Input'
import {
    profileFriendshipMapStateToProps,
    profileFriendshipMapDispatchToProps
} from '../../../../store/maps/profile/friendship'

class Friendship extends React.Component {
    render () {
        const { _id, friendship, inviteToFriends, removeFromFriends } = this.props

        const friendshipParser = {
            0: false,
            1: <Input type={'button'} value={'+ Добавить в друзья'} className={'profile-personal-action'} onClick={() => { inviteToFriends(_id) }}/>,
            2: <Input type={'button'} value={'- Отменить заявку'} className={'profile-personal-action'} styleType={'negative'} onClick={() => { removeFromFriends(_id) }}/>,
            3: <Input type={'button'} value={'+ Ответить на заявку'} className={'profile-personal-action'} onClick={() => { inviteToFriends(_id) }}/>,
            4: <Input type={'button'} value={'- Удалить из друзей'} className={'profile-personal-action'} styleType={'negative'} onClick={() => { removeFromFriends(_id) }}/>
        }

        return friendshipParser[friendship.friendship]
    }
}
Friendship.propTypes = {
    _id: PropTypes.string,
    friendship: PropTypes.object,
    inviteToFriends: PropTypes.func,
    removeFromFriends: PropTypes.func
}
export default connect(
    profileFriendshipMapStateToProps,
    profileFriendshipMapDispatchToProps
)(Friendship)
