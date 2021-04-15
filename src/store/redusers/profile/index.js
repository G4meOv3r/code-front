import { createReducer } from '@reduxjs/toolkit'
import personalReducers from './personalReducers'
import friendsReducers from './friendsReducers'
import friendshipReducers from './friendshipRedusers'
import profilesReducers from './profiles'
import changeProfileReducers from './changeProfile'

const initialState = {
    _id: '',
    change: {
        isLoading: false,
        errors: null,
        success: false
    },
    profiles: {
        isLoading: false,
        errors: null,
        profiles: []
    },
    friends: {
        isLoading: false,
        errors: null,
        data: []
    }
}

const profileReducer = createReducer(initialState, {
    ...personalReducers,
    ...friendsReducers,
    ...friendshipReducers,
    ...profilesReducers,
    ...changeProfileReducers
})
export default profileReducer
