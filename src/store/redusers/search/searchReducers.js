const searchReducers = {
    GET_SEARCH_START: (state, action) => {
        return state
    },
    GET_SEARCH_SUCCESS: (state, action) => {
        state = action.data
        return state
    },
    GET_SEARCH_FAIL: (state, action) => {
        return state
    },

    STOP_SEARCH_SUCCESS: (state, action) => {
        state.inSearch = false
        return state
    },

    UPDATE_SEARCH: (state, action) => {
        state = action.data
        return state
    }
}

export default searchReducers
