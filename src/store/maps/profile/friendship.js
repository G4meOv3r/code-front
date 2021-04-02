import { inviteToFriends, removeFromFriends } from '../../actions/profile/friendship'

export const profileFriendshipMapDispatchToProps = (dispatch) => ({
    inviteToFriends: _id => dispatch(inviteToFriends(_id)),
    removeFromFriends: _id => dispatch(removeFromFriends(_id))
})
export const profileFriendshipMapStateToProps = (state) => ({
    friendship: state.profile.friendship
})
