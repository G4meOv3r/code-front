import { createReducer } from '@reduxjs/toolkit'
import { getCookie } from '../../../utils/helpers/cookie'
import tokenReducers from './tokenReducers'

const token = getCookie('token')
const _id = getCookie('_id')
const initialState = {
    _id: _id || '',
    token: token || '',
    isAuthorized: !!token,
    isLoading: false,
    errors: null
}

const authReducer = createReducer(initialState, {
    ...tokenReducers
})
export default authReducer
