export const signUp = query => ({
    type: 'GET_TOKEN',
    rest: '/auth/signup',
    method: 'POST',
    query
})
