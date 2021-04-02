import { setCookie } from '../../../utils/helpers/cookie'

const tokenReducers = {
    GET_TOKEN_START: (state) => {
        state.isLoading = true
        state.errors = null
        return state
    },
    GET_TOKEN_SUCCESS: (state, action) => {
        state.isLoading = false
        state._id = action.data._id
        state.token = action.data.token
        setCookie('_id', state._id)
        setCookie('token', state.token)
        state.isAuthorized = true
        return state
    },
    GET_TOKEN_FAIL: (state, action) => {
        state.isLoading = false
        state.errors = action.error
        return state
    }
}

export default tokenReducers
