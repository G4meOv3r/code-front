import socket from '../../ws'
import { store } from '../../index'

const searchReducers = {
    SUBSCRIBE_SEARCH_COMPLETE: (state, action) => {
        socket.on('search:update', (data) => {
            store.dispatch({ type: 'UPDATE_SEARCH', data })
        })
        return state
    }
}
export default searchReducers
