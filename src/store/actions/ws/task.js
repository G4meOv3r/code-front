export const subscribeTask = _id => ({
    type: 'SUBSCRIBE_TASK',
    event: 'task:subscribe',
    method: 'WS',
    data: { _id }
})

export const unsubscribeTask = _id => ({
    type: 'UNSUBSCRIBE_TASK',
    event: `task:${_id}:unsubscribe`,
    method: 'WS'
})
