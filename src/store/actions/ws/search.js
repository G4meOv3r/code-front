export const subscribeSearch = () => ({
    type: 'SUBSCRIBE_SEARCH',
    event: 'search:subscribe',
    method: 'WS'
})

export const unsubscribeSearch = () => ({
    type: 'UNSUBSCRIBE_SEARCH',
    event: 'search:unsubscribe',
    method: 'WS'
})
