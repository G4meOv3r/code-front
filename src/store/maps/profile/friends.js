import { getFriends } from '../../actions/profile/friends'

export const profileFriendsMapDispatchToProps = (dispatch) => ({
    getFriends: _id => dispatch(getFriends(_id))
})
export const profileFriendsMapStateToProps = (state) => ({
    friends: state.profile.friends
})
