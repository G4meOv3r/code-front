const sendPackageReducers = {
    SEND_PACKAGE_START: (state, action) => {
        state.send.isLoading = true
        state.send.errors = null
        return state
    },
    SEND_PACKAGE_SUCCESS: (state, action) => {
        state.send.isLoading = false
        return state
    },
    SEND_PACKAGE_FAIL: (state, action) => {
        state.send.isLoading = false
        state.send.errors = action.error
        return state
    }
}
export default sendPackageReducers
