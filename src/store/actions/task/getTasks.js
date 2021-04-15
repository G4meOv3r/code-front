export const getTasks = () => ({
    type: 'GET_TASKS',
    rest: '/task',
    method: 'GET'
})
