export const getProfile = _id => ({
    type: 'GET_PROFILE',
    rest: '/profile',
    method: 'GET',
    query: { _id }
})
