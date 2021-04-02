export const getTicket = () => ({
    type: 'GET_TICKET',
    rest: '/ws',
    method: 'GET',
    query: {}
})
