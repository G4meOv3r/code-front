import socket from '../../ws'
import { store } from '../../index'

const profilesReducers = {
    SUBSCRIBE_PROFILES_COMPLETE: (state, action) => {
        console.log(1)
        socket.on('profiles:update', (data) => {
            store.dispatch({ type: 'UPDATE_PROFILES', data })
        })
        return state
    }
}
export default profilesReducers
