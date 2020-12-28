export const signIn = query => ({
    type: 'AUTH',
    rest: '/auth/signin',
    method: 'POST',
    query
})
