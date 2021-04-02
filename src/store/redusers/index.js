import authReducer from './auth'
import profileReducer from './profile'

export const rootReducer = {
    auth: authReducer,
    profile: profileReducer
}
