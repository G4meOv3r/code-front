export const subscribePackage = _id => ({
    type: 'SUBSCRIBE_PACKAGE',
    event: 'package:subscribe',
    method: 'WS',
    data: { _id }
})

export const unsubscribePackage = _id => ({
    type: 'UNSUBSCRIBE_PACKAGE',
    event: `package:${_id}:subscribe`,
    method: 'WS'
})
