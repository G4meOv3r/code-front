const personalReducers = {
    GET_PROFILE_PERSONAL_START: (state, action) => {
        state._id = action._id
        state.personal.isLoading = true
        state.personal.errors = null
        return state
    },
    GET_PROFILE_PERSONAL_SUCCESS: (state, action) => {
        state.personal.isLoading = false

        const { _id, personal, friendship } = action.data
        if (_id !== state._id) {
            return state
        }
        state.personal.data = personal
        state.friendship.friendship = friendship

        return state
    },
    GET_PROFILE_PERSONAL_FAIL: (state, action) => {
        state.personal.isLoading = false
        state.personal.errors = action.error
        return state
    }
}
export default personalReducers
