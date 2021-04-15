export const subscribeContest = _id => ({
    type: 'SUBSCRIBE_CONTEST',
    event: 'contest:subscribe',
    method: 'WS',
    data: { _id }
})

export const unsubscribeContest = _id => ({
    type: 'UNSUBSCRIBE_CONTEST',
    event: `contest:${_id}:unsubscribe`,
    method: 'WS'
})
