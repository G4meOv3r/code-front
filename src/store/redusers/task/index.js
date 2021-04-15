import { createReducer } from '@reduxjs/toolkit'
import getTaskReducers from './getTaskReducers'

const initialState = {
    tasks: {
        isLoading: false,
        errors: null,
        data: []
    }
}

const taskReducer = createReducer(initialState, {
    ...getTaskReducers
})
export default taskReducer
