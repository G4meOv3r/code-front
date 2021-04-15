import socket from '../../ws'
import { store } from '../../index'

const packageReducers = {
    SUBSCRIBE_PACKAGE_COMPLETE: (state, action) => {
        socket.on(`package:${action.data._id}:update`, (data) => {
            store.dispatch({ type: 'UPDATE_PACKAGE', data })
        })
        return state
    }
}
export default packageReducers
