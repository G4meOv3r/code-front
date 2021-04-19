import authReducer from './auth'
import profileReducer from './profile'
import contestsReducer from './contest'
import taskReducer from './task'
import packageReducer from './package'
import searchReducer from './search'
import wsReducer from './ws'

export const rootReducer = {
    auth: authReducer,
    profile: profileReducer,
    contests: contestsReducer,
    task: taskReducer,
    package: packageReducer,
    search: searchReducer,
    ws: wsReducer
}
