export const getFriends = _id => ({
    _id,
    type: 'GET_PROFILE_FRIENDS',
    rest: '/profile/friends',
    method: 'GET',
    query: { _id }
})
