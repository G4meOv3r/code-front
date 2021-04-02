export const ws = store => next => action => {
    if (action.method !== 'WS') {
        next(action)
        return
    }

    const socket = store.getState().auth.socket

    socket.send(JSON.stringify(action.data))
}
