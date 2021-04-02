const friendsReducers = {
    GET_PROFILE_FRIENDS_START: (state, action) => {
        state._id = action._id
        state.friends.isLoading = true
        state.friends.errors = null
        return state
    },
    GET_PROFILE_FRIENDS_SUCCESS: (state, action) => {
        state.friends.isLoading = false

        const { _id, friends } = action.data
        if (_id !== state._id) {
            return state
        }
        state.friends.data = friends

        return state
    },
    GET_PROFILE_FRIENDS_FAIL: (state, action) => {
        state.friends.isLoading = false
        state.friends.errors = action.error
        return state
    }
}
export default friendsReducers
