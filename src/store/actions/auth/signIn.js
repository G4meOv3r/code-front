export const signIn = query => ({
    type: 'GET_TOKEN',
    rest: '/auth/signin',
    method: 'POST',
    query
})
