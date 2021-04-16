import socket from '../../ws'

const socketReducers = {
    CONNECT_SOCKET: (state) => {
        const token = state.token
        if (token) {
            socket.auth.token = token
        }
        socket.disconnect().connect()
        return state
    },
    DISCONNECT_SOCKET: (state) => {
        socket.disconnect()
        return state
    }
}

export default socketReducers
