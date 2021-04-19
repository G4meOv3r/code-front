export const subscribeProfiles = () => ({
    type: 'SUBSCRIBE_PROFILES',
    event: 'profiles:subscribe',
    method: 'WS'
})

export const unsubscribeProfiles = () => ({
    type: 'UNSUBSCRIBE_PROFILES',
    event: 'profiles:unsubscribe',
    method: 'WS'
})
