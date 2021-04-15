export const getTask = _id => ({
    type: 'GET_TASK',
    rest: '/task',
    method: 'GET',
    query: { _id }
})
