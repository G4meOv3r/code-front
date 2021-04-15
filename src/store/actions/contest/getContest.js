export const getContest = _id => ({
    type: 'GET_CONTEST',
    rest: '/contest',
    method: 'GET',
    query: { _id }
})
