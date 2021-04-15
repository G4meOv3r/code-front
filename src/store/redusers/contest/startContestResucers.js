const startContestReducers = {
    START_CONTEST_START: (state) => {
        state.start.isLoading = true
        state.start.errors = null
        return state
    },
    START_CONTEST_SUCCESS: (state, action) => {
        state.start.isLoading = false
        state.start._id = action.data._id
        return state
    },
    START_CONTEST_FAIL: (state, action) => {
        state.start.isLoading = false
        state.start.errors = action.error
        return state
    }
}
export default startContestReducers
