export const connectContest = _id => ({
    type: 'CONNECT_CONTEST',
    rest: '/contest/connect',
    method: 'GET',
    query: { _id }
})
