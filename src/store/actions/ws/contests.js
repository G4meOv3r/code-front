export const subscribeContests = () => ({
    type: 'SUBSCRIBE_CONTESTS',
    event: 'contests:subscribe',
    method: 'WS'
})

export const unsubscribeContests = () => ({
    type: 'UNSUBSCRIBE_CONTESTS',
    event: 'contests:unsubscribe',
    method: 'WS'
})
