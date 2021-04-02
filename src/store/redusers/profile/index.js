import { createReducer } from '@reduxjs/toolkit'
import personalReducers from './personalReducers'
import friendsReducers from './friendsReducers'
import friendshipReducers from './friendshipRedusers'

const initialState = {
    _id: '',
    personal: {
        data: {
            nickname: '',
            name: '',
            lastName: '',
            awards: [],
            status: 0
        },
        isLoading: false,
        errors: null
    },
    friends: {
        data: [],
        isLoading: false,
        errors: null
    },
    friendship: {
        friendship: 0,
        isLoading: false,
        errors: null
    }
}

const profileReducer = createReducer(initialState, {
    ...personalReducers,
    ...friendsReducers,
    ...friendshipReducers
})
export default profileReducer
