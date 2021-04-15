import { createReducer } from '@reduxjs/toolkit'
import contestsReducers from './contests'
import taskReducers from './task'
import packageReducers from './package'

const initialState = {
    tasks: {
        isLoading: false,
        errors: null,
        data: []
    }
}

const wsReducer = createReducer(initialState, {
    ...contestsReducers,
    ...taskReducers,
    ...packageReducers
})
export default wsReducer
