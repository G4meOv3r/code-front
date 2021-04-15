import socket from '../../ws'
import { store } from '../../index'

const taskReducers = {
    SUBSCRIBE_TASK_COMPLETE: (state, action) => {
        socket.on(`task:${action.data._id}:update`, (data) => {
            store.dispatch({ type: 'UPDATE_TASK', data, taskId: action.data._id })
        })
        return state
    }
}
export default taskReducers
