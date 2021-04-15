const getPackageReducers = {
    GET_PACKAGE_START: (state, action) => {
        const { _id } = action.query
        state[_id] = {}
        state[_id].isLoading = true
        state[_id].errors = null
        return state
    },
    GET_PACKAGE_SUCCESS: (state, action) => {
        const { _id } = action.prevAction.query
        state[_id].isLoading = false
        state[_id].package = action.data
        return state
    },
    GET_PACKAGE_FAIL: (state, action) => {
        const { _id } = action.prevAction.query
        state[_id].isLoading = false
        state[_id].errors = action.error
        return state
    },

    UPDATE_PACKAGE: (state, action) => {
        state[action.data._id].package = action.data
        return state
    }
}
export default getPackageReducers
