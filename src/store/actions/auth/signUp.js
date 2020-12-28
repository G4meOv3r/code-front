export const signUp = query => ({
    type: 'AUTH',
    rest: '/auth/signup',
    method: 'POST',
    query
})
