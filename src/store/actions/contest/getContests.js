export const getContests = () => ({
    type: 'GET_CONTESTS',
    rest: '/contest',
    method: 'GET',
    query: {}
})
