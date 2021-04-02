const friendshipReducers = {
    FRIENDSHIP_MANAGE_START: (state) => {
        state.friendship.isLoading = true
        state.friendship.errors = null
        return state
    },
    FRIENDSHIP_MANAGE_SUCCESS: (state, action) => {
        state.friendship.isLoading = false

        const { _id, friendship } = action.data
        if (_id !== state._id) {
            return state
        }
        state.friendship.friendship = friendship

        return state
    },
    FRIENDSHIP_MANAGE_FAIL: (state, action) => {
        state.friendship.isLoading = false
        state.friendship.errors = action.error
        return state
    }
}
export default friendshipReducers
