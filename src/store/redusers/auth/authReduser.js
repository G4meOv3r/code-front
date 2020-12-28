import { createReducer } from '@reduxjs/toolkit'
import { getCookie, setCookie } from '../../../utils/helpers/cookie'

const token = getCookie('token')
const initialState = {
    token: token || '',
    isAuthorized: !!token,
    isLoading: false,
    errors: null
}

export const authReducer = createReducer(initialState, {
    AUTH_START: (state) => {
        state.isLoading = true
        state.errors = null
        return state
    },
    AUTH_SUCCESS: (state, action) => {
        state.isLoading = false
        state.token = action.data.token
        setCookie('token', state.token)
        state.isAuthorized = true
        return state
    },
    AUTH_FAIL: (state, action) => {
        state.isLoading = false
        state.errors = action.error
        return state
    }
})
