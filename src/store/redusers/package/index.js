import { createReducer } from '@reduxjs/toolkit'
import sendPackageReducers from './sendPackageReducers'
import getPackageReducers from './getPackageReducers'

const initialState = {
    send: {
        isLoading: false,
        errors: null
    }
}

const packageReducer = createReducer(initialState, {
    ...sendPackageReducers,
    ...getPackageReducers
})
export default packageReducer
