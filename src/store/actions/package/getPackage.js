export const getPackage = _id => ({
    type: 'GET_PACKAGE',
    rest: '/package',
    method: 'GET',
    query: { _id }
})
