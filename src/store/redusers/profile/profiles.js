const profilesReducers = {
    GET_PROFILE_START: (state, action) => {
        const { _id } = action.query
        state[_id] = {}
        state[_id].isLoading = true
        state[_id].errors = null
        return state
    },
    GET_PROFILE_SUCCESS: (state, action) => {
        const { _id } = action.prevAction.query
        state[_id].isLoading = false
        state[_id] = { ...state[_id], ...action.data }
        return state
    },
    GET_PROFILE_FAIL: (state, action) => {
        const { _id } = action.prevAction.query
        state[_id].isLoading = false
        state[_id].errors = action.error
        return state
    },

    GET_PROFILES_START: (state, action) => {
        state.profiles.isLoading = true
        state.profiles.errors = null
        return state
    },
    GET_PROFILES_SUCCESS: (state, action) => {
        state.profiles.isLoading = false
        state.profiles.profiles = action.data
        return state
    },
    GET_PROFILES_FAIL: (state, action) => {
        state.profiles.isLoading = false
        state.profiles.errors = action.error
        return state
    },
    UPDATE_PROFILES: (state, action) => {
        console.log('update')
        const profileIndex = state.profiles.profiles.reduce((accumulator, profile, index) => {
            return accumulator + (profile._id === action.data._id ? index + 1 : 0)
        }, -1)
        if (profileIndex !== -1) {
            state.profiles.profiles[profileIndex] = action.data
        } else {
            state.profile.profiles = [action.data, ...state.profile.profiles]
        }
        return state
    }
}
export default profilesReducers
