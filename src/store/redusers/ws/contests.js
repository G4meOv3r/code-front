import socket from '../../ws'
import { store } from '../../index'

const contestsReducers = {
    SUBSCRIBE_CONTESTS_COMPLETE: (state, action) => {
        socket.on('contests:update', (data) => {
            store.dispatch({ type: 'UPDATE_CONTESTS', data })
        })
        return state
    },

    SUBSCRIBE_CONTEST_COMPLETE: (state, action) => {
        socket.on(`contest:${action.data._id}:update`, (data) => {
            store.dispatch({ type: 'UPDATE_CONTEST', data })
            console.log(data)
        })
        socket.on(`contest:${action.data._id}:package:update`, (data) => {
            store.dispatch({ type: 'UPDATE_CONTEST_PACKAGE', data, contestId: action.data._id })
        })
        return state
    }
}
export default contestsReducers
