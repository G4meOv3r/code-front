export const inviteToFriends = _id => ({
    _id,
    type: 'FRIENDSHIP_MANAGE',
    rest: `/profile/friends/invite?_id=${_id}`,
    method: 'POST',
    query: { _id }
})

export const removeFromFriends = _id => ({
    _id,
    type: 'FRIENDSHIP_MANAGE',
    rest: `/profile/friends/remove?_id=${_id}`,
    method: 'POST',
    query: { _id }
})
