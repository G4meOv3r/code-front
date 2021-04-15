export const startContest = _id => ({
    type: 'START_CONTEST',
    rest: '/contest/start',
    method: 'GET',
    query: { _id }
})
