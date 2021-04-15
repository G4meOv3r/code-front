export const getPersonal = _id => ({
    _id,
    type: 'GET_PROFILE_PERSONAL',
    rest: '/profile/personal',
    method: 'GET',
    query: { _id }
})
