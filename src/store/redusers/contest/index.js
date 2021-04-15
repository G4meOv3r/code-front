import { createReducer } from '@reduxjs/toolkit'
import contestsReducers from './contestsResucers'
import createContestReducers from './createContestResucers'
import startContestReducers from './startContestResucers'

const initialState = {
    contests: {
        isLoading: false,
        errors: null,
        contests: []
    },
    create: {
        isLoading: false,
        errors: null,
        _id: ''
    },
    start: {
        isLoading: false,
        errors: null
    }
}

const contestReducer = createReducer(initialState, {
    ...contestsReducers,
    ...createContestReducers,
    ...startContestReducers
})
export default contestReducer
