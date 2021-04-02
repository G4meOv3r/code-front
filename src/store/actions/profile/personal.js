export const getPersonal = _id => ({
    _id,
    type: 'GET_PROFILE_PERSONAL',
    rest: `/profile/personal?_id=${_id}`,
    method: 'GET'
})
