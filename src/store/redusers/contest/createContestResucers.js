const createContestReducers = {
    CREATE_CONTEST_START: (state) => {
        state.create.isLoading = true
        state.create.errors = null
        return state
    },
    CREATE_CONTEST_SUCCESS: (state, action) => {
        state.create.isLoading = false
        state.create._id = action.data._id
        return state
    },
    CREATE_CONTEST_FAIL: (state, action) => {
        state.create.isLoading = false
        state.create.errors = action.error
        return state
    },

    CLEAR_CREATE_CONTEST: (state, action) => {
        state.create._id = ''
    }
}
export default createContestReducers
