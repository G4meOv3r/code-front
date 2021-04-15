import { setCookie } from '../../../utils/helpers/cookie'
import socket from '../../ws'

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

        socket.auth.token = action.data.token
        socket.disconnect().connect()

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
