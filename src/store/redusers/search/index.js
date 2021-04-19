import { createReducer } from '@reduxjs/toolkit'
import searchReducers from './searchReducers'

const initialState = {
    inSearch: false,
    searchers: null,
    date: null,
    contest: null
}

const searchReducer = createReducer(initialState, {
    ...searchReducers
})
export default searchReducer
