export const inviteToFriends = _id => ({
    _id,
    type: 'FRIENDSHIP_MANAGE',
    rest: '/profile/friends/invite',
    method: 'POST',
    query: { _id }
})

export const removeFromFriends = _id => ({
    _id,
    type: 'FRIENDSHIP_MANAGE',
    rest: '/profile/friends/remove',
    method: 'POST',
    query: { _id }
})
