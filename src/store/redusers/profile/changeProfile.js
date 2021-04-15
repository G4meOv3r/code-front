const changeProfileReducers = {
    CHANGE_PROFILE_START: (state, action) => {
        state.change.isLoading = true
        return state
    },
    CHANGE_PROFILE_SUCCESS: (state, action) => {
        state.change.isLoading = false
        state.change.success = true
        return state
    },
    CHANGE_PROFILE_FAIL: (state, action) => {
        state.change.isLoading = false
        state.change.errors = action.error
        return state
    },

    CLEAR_CHANGE_PROFILE: (state, action) => {
        state.change.success = false
        return state
    }
}
export default changeProfileReducers
