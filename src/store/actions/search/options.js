export const setOption = _id => ({
    type: 'GET_PROFILE_FRIENDS',
    rest: `/profile/friends?_id=${_id}`,
    method: 'GET'
})
