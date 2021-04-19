import { createReducer } from '@reduxjs/toolkit'
import contestsReducers from './contests'
import taskReducers from './task'
import packageReducers from './package'
import profilesReducers from './profiles'
import searchReducers from './search'

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
    ...packageReducers,
    ...profilesReducers,
    ...searchReducers
})
export default wsReducer
