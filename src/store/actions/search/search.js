export const getSearch = () => ({
    type: 'GET_SEARCH',
    rest: '/search',
    method: 'GET'
})

export const startSearch = () => ({
    type: 'START_SEARCH',
    rest: '/search/start',
    method: 'GET'
})

export const stopSearch = () => ({
    type: 'STOP_SEARCH',
    rest: '/search/stop',
    method: 'GET'
})
